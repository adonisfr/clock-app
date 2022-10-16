import refresh from '../assets/desktop/icon-refresh.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuotes } from './slices/quotesSlice';

const Quotes = () => {
	const toggle = useSelector((state) => state.clock.toggle);
	const quote = useSelector((state) => state.quotes.quote);
	const author = useSelector((state) => state.quotes.author);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getQuotes());
	}, []);

	return (
		!toggle && (
			<div className="max-w-[324px] pt-8 my-0 mx-auto md:font-normal md:text-lg md:leading-7 md:max-w-[573px] md:pt-20  lg:ml-[165px]">
				<button
					className="float-right ml-2 h-[16.67px] w-[16.67px]"
					onClick={() => dispatch(getQuotes())}
				>
					<img src={refresh} alt="icon refresh" />
				</button>
				<div>
					<p className="font-inter font-normal text-xs  text-white leading-[22px] md:text-lg md:leading-7">
						{quote}
					</p>
					<h3 className="font-inter font-bold text-xs text-white mt-2 md:text-lg md:leading-7">
						{author}
					</h3>
				</div>
			</div>
		)
	);
};

export default Quotes;
