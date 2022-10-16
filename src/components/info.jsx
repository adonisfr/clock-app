import { useSelector } from 'react-redux';
import TextInfo from './textInfo';

const Info = () => {
	const toggle = useSelector((state) => state.clock.toggle);
	const currentInfo = useSelector((state) => state.clock.currentTimeInfo);
	const { dayOfWeek, dayOfYear, timezone, weekNumber } = currentInfo;

	return (
		<>
			{toggle && (
				<div className="flex w-[100vw] bg-[#cbcdcd] dark:bg-black backdrop-blur-lg">
					<div className="flex flex-col md:flex-row w-[100vw] gap-4 md:gap-24 mt-6 md:items-center justify-center px-5  h-72 md:h-[449px] lg:h-64 lg:gap-48 lg:max-w-[1000px] lg:ml-40 2xl:h-96">
						<div className="flex flex-col gap-4 ">
							<TextInfo text="current timezone" info={timezone} />
							<TextInfo text="day of the week" info={dayOfWeek} />
						</div>
						<div className="flex flex-col gap-4  lg:border-l-2 lg:border-[#303030]/30 lg:pl-16 2xl:pl-30 ">
							<TextInfo text="day of the year" info={dayOfYear} />
							<TextInfo text="week number" info={weekNumber} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Info;
