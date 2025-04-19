import s from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/images/logo-header.svg';
import footerLogo from '../../assets/images/logo-footer.svg';

const Logo = ({ position }) => {
	const classBuilder = position === 'header' ? s.headerLogo : s.footerLogo;

	const logo = position === 'header' ? headerLogo : footerLogo;

	return (
		<NavLink to="/">
			<img className={classBuilder} src={logo} alt="logo" />
		</NavLink>
	);
};

export default Logo;
