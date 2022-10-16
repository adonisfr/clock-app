import propTypes from 'prop-types';

const Container = ({ children }) => {
	return (
		<div className="bg-[url('assets/mobile/bg-image-daytime.jpg')] md:bg-[url('assets/tablet/bg-image-daytime.jpg')] lg:bg-[url('assets/desktop/bg-image-daytime.jpg')] h-full w-full bg-cover">
			<div className="bg-slate-500/30 lg:bg-slate-900/20 h-full">{children}</div>
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
