import refresh from '../assets/desktop/icon-refresh.svg';
import { useSelector } from 'react-redux';

const Quotes = () => {
	const toggle = useSelector((state) => state.clock.toggle);

	return (
		!toggle && (
			<div className="w-[324px] pt-8 my-0 mx-auto md:font-normal md:text-lg md:leading-7 md:w-[573px] md:pt-20  lg:ml-[165px]">
				<button className="float-right ml-2 h-[16.67px] w-[16.67px]">
					<img src={refresh} alt="icon refresh" />
				</button>
				<div>
					<p className="font-inter font-normal text-xs  text-white leading-[22px] md:text-lg md:leading-7">
						“The science of operations, as derived sss d d dd d from mathematics more especially, is
						a science of itself, and has its own abstract truth and value.”
					</p>
					<h3 className="font-inter font-bold text-xs text-white mt-2 md:text-lg md:leading-7">
						Ada Lovelace
					</h3>
				</div>
			</div>
		)
	);
};

export default Quotes;
