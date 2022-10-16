import propTypes from 'prop-types';

const TextInfo = ({ text, info }) => {
	return (
		<div className="flex justify-between md:flex-col">
			<p className="font-inter font-normal text-[10px] uppercase leading-7 tracking-[2px] text-[#303030] dark:text-gray-300 md:text-[13px] md:tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
				{text}
			</p>
			<h1 className="font-inter font-bold text-xl leading-6 text-[#303030] dark:text-white md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[68px]">
				{info}
			</h1>
		</div>
	);
};

TextInfo.propTypes = {
	text: propTypes.string,
	info: propTypes.oneOfType([propTypes.string, propTypes.number])
};

TextInfo.defaultProps = {
	text: '',
	info: ''
};

export default TextInfo;
