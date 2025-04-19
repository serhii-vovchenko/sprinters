import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../Logo/Logo';

const Navigation = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.activeLink);
	};

	return (
		<nav className={s.navigation}>
			<div className={s.wrapper}>
				<Logo position={'header'} />
				<ul className={s.firstList}>
					<li>
						<NavLink to="/" className={buildLinkClass}>
							Головна
						</NavLink>
					</li>

					<li>
						<NavLink to="/carriers" className={buildLinkClass}>
							Перевізникам
						</NavLink>
					</li>

					<li>
						<NavLink to="/about" className={buildLinkClass}>
							Про нас
						</NavLink>
					</li>

					<li>
						<NavLink to="/carrier-profile" className={buildLinkClass}>
							Профіль перевізника
						</NavLink>
					</li>
				</ul>
			</div>

			<ul className={s.secondList}>
				<li>
					<NavLink to="/register" className={s.registerLink}>
						Створити профіль
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" className={s.loginLink}>
						Увійти
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
