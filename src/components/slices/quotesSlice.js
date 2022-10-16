import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const quotesSlice = createSlice({
	name: 'quotes',
	initialState: {
		quote: '',
		author: ''
	},
	reducers: {
		setQuotes: (state, actions) => {
			state.quote = actions.payload;
		},
		setAuthor: (state, actions) => {
			state.author = actions.payload;
		}
	}
});

const { setQuotes, setAuthor } = quotesSlice.actions;

export const getQuotes = () => {
	return (dispatch) => {
		axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random').then((response) => {
			const { en, author } = response.data;
			if (author) {
				dispatch(setQuotes(en));
				dispatch(setAuthor(author));
			}
		});
	};
};

export default quotesSlice.reducer;
