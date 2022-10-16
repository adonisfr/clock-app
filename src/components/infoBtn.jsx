import arrowUp from '../assets/desktop/icon-arrow-up.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setToggle } from './slices/clockSlice';

const InfoBtn = () => {
	const toggle = useSelector((state) => state.clock.toggle);
	const dispatch = useDispatch();
	return (
		<div className="flex lg:justify-end lg:items-end lg:h-72 w-[80%] my-10 md:my-20 ml-8 lg:my-0 lg:pb-20 lg:max-w-xl">
			<button
				className="flex justify-between rounded-full bg-white pl-3 pr-1 w-[115px] h-[39px] outline-none md:h-[56px] md:w-[146px]"
				onClick={() => dispatch(setToggle(!toggle))}
			>
				<label className="uppercase mx-0 my-auto pl-2 text-black opacity-50 font-bold md:text-base md:leading-7 md:tracking-[5px] hover:cursor-pointer">
					{toggle ? 'less' : 'more'}
				</label>
				<img
					className={`h-8 w-8  mx-0 my-auto ${
						toggle ? 'origin-center rotate-180' : ''
					} md:h-10 md:w-10`}
					src={arrowUp}
					alt="arrow"
				/>
			</button>
		</div>
	);
};

export default InfoBtn;
