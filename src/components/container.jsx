import propTypes from 'prop-types';

const Container = ({ children }) => {
	return (
		<div
			className="bg-[url('assets/mobile/bg-image-daytime.jpg')] dark:bg-[url('assets/mobile/bg-image-nighttime.jpg')] 
		               md:bg-[url('assets/tablet/bg-image-daytime.jpg')] md:dark:bg-[url('assets/tablet/bg-image-nighttime.jpg')]
		               lg:bg-[url('assets/desktop/bg-image-daytime.jpg')] lg:dark:bg-[url('assets/desktop/bg-image-nighttime.jpg')]
					   h-full w-full bg-cover"
		>
			<div className="bg-slate-900/20 h-full">{children}</div>
		</div>
	);
};

Container.propTypes = {
	children: propTypes.oneOfType([propTypes.string, propTypes.node])
};

Container.defaultProps = {
	children: null
};

export default Container;
