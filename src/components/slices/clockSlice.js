import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const clockSlice = createSlice({
	name: 'clock',
	initialState: {
		toggle: false,
		currentTimeInfo: {},
		location: ''
	},
	reducers: {
		setToggle: (state, actions) => {
			state.toggle = actions.payload;
		},
		setCurrentTime: (state, actions) => {
			state.currentTimeInfo = actions.payload;
		},
		setLocation: (state, actions) => {
			state.location = actions.payload;
		}
	}
});

const { setToggle, setCurrentTime, setLocation } = clockSlice.actions;

export const getCurrentTime = () => {
	return (dispatch) => {
		axios.get('http://worldtimeapi.org/api/ip').then((response) => {
			const { data } = response;
			const current = {
				time: data.datetime,
				dayOfWeek: data.day_of_week,
				dayOfYear: data.day_of_year,
				timezone: data.timezone,
				weekNumber: data.week_number,
				abbreviation: data.abbreviation,
				ip: data.client_ip
			};
			dispatch(setCurrentTime(current));
		});
	};
};

export const getLocationInfo = (ip) => {
	return (dispatch) => {
		const api = `https://api.ipbase.com/v2/info?apikey=YG2mstOWrhaN6H9MezVUBIqxM5OwyH22WsaBU4fN&ip=${ip}`;
		axios.get(api).then((response) => {
			const { data } = response.data;
			const region = data?.location?.region?.name;
			const country = data?.location?.country?.alpha2;
			dispatch(setLocation({ region, country }));
		});
	};
};

export { setToggle };

export default clockSlice.reducer;
