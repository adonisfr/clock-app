import { configureStore } from '@reduxjs/toolkit';
import clockReducers from './components/slices/clockSlice';

const store = configureStore({
	reducer: {
		clock: clockReducers
	}
});

export default store;
