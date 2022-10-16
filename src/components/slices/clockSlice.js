import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const clockSlice = createSlice({
	name: 'clock',
	initialState: {
		toggle: false,
		currentTimeInfo: {}
	},
	reducers: {
		setToggle: (state, actions) => {
			state.toggle = actions.payload;
		},
		setCurrentTime: (state, actions) => {
			state.currentTimeInfo = actions.payload;
		}
	}
});

const { setToggle, setCurrentTime } = clockSlice.actions;

export const getCurrentTime = () => {
	return (dispatch) => {
		axios.get('http://worldtimeapi.org/api/ip').then((response) => {
			console.log('current time', response.data);
			const { data } = response;
			const current = {
				time: data.datetime,
				dayOfWeek: data.day_of_week,
				dayOfYear: data.day_of_year,
				timezone: data.timezone,
				weekNumber: data.week_number,
				abbreviation: data.abbreviation
			};
			dispatch(setCurrentTime(current));
		});
	};
};

export { setToggle };

export default clockSlice.reducer;
