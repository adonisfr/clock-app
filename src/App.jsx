import Container from './components/container';
import CurrentTime from './components/currentTime';
import Info from './components/info';
import InfoBtn from './components/infoBtn';
import Quotes from './components/quotes';

function App() {
	return (
		<div className="min-h-screen h-screen">
			<Container>
				<Quotes />
				<div className="absolute w-full grid grid-cols-1 lg:grid-cols-2 bottom-0">
					<CurrentTime />
					<InfoBtn />
					<Info />
				</div>
			</Container>
		</div>
	);
}

export default App;
