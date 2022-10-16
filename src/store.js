import { configureStore } from '@reduxjs/toolkit';
import clockReducers from './components/slices/clockSlice';
import quoteReducers from './components/slices/quotesSlice';

const store = configureStore({
	reducer: {
		clock: clockReducers,
		quotes: quoteReducers
	}
});

export default store;
