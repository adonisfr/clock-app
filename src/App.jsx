import Container from './components/container';
import CurrentTime from './components/currentTime';
import Info from './components/info';
import InfoBtn from './components/infoBtn';
import Quotes from './components/quotes';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentTime } from './components/slices/clockSlice';
import { useEffect } from 'react';

function App() {
	const { schedule } = useSelector((state) => state.clock.currentTimeInfo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentTime());
	}, []);

	useEffect(() => {
		if (schedule && schedule === 'evening') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [schedule]);

	return (
		<div className="min-h-screen h-screen">
			{schedule && (
				<Container>
					<Quotes />
					<div className="absolute w-full grid grid-cols-1 lg:grid-cols-2 bottom-0">
						<CurrentTime />
						<InfoBtn />
						<Info />
					</div>
				</Container>
			)}
		</div>
	);
}

export default App;
