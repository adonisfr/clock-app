import icon from '../assets/desktop/icon-sun.svg';

const CurrentTime = () => {
	return (
		<div
			className={`flex flex-col gap-3 w-[278px] h-[185px] ml-8 md:w-[499px] md:h-[231px] lg:max-w-[1110px] lg:ml-[165px] lg:h-[288px] lg:mb-2 2xl:mb-14`}
		>
			<div className="flex">
				<img className="h-[23.56px] w-[23.56px]" src={icon} alt="icon" />
				<h3 className="ml-4 uppercase font-inter font-normal text-[15px] leading-[25px] tracking-[3px] text-white md:text-lg md:leading-7 md:tracking-[3.6px]">
					good morning<span className="hidden md:inline">{`, it's currently`}</span>
				</h3>
			</div>
			<div className="relative flex flex-row">
				<h1 className="font-inter font-bold text-[100px] leading-[100px] tracking-[-2.5px] text-white md:text-[175px] md:leading-[175px] md:tracking-[-4.375px]">
					11:37
				</h1>
				<span className="absolute right-0 bottom-3 uppercase font-light text-[15px] text-white md:text-[32px] md:leading-7 ">
					bst
				</span>
			</div>
			<div>
				<h1 className="uppercase text-white font-bold text-[15px] leading-7 tracking-[3px] md:text-lg md:leading-7 md:tracking-[3.6px]">
					in london, uk
				</h1>
			</div>
		</div>
	);
};

export default CurrentTime;