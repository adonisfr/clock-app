import { createSlice } from '@reduxjs/toolkit';

const clockSlice = createSlice({
	name: 'clock',
	initialState: {
		toggle: false
	},
	reducers: {
		setToggle: (state, actions) => {
			state.toggle = actions.payload;
		}
	}
});

const { setToggle } = clockSlice.actions;

export { setToggle };

export default clockSlice.reducer;
