import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={`container ${s.wrapper}`}>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
