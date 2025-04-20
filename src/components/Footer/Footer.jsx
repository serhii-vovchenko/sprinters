import s from './Footer.module.css';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.headBlock}>
					<div className={s.firstColumn}>
						<Logo position={'footer'} />
						<p className={s.companyInfo}>Платформа пошуку перевізників та бронювання поїздок</p>
					</div>

					<div className={s.middleColumn}>
						<div className={s.firstList}>
							<p className={s.listTitle}>Клієнтам</p>
							<ul>
								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Головна
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Про нас
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Ціни
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Маршрути
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Політика приватності
									</NavLink>
								</li>
							</ul>
						</div>

						<div className={s.secondList}>
							<p className={s.listTitle}>Перевізникам</p>
							<ul>
								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Help Docs
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Особистий кабінет
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Оновлення
									</NavLink>
								</li>

								<li className={s.listItem}>
									<NavLink className={s.listLink} to={'/'}>
										Контакти
									</NavLink>
								</li>
							</ul>
						</div>
					</div>

					<div className={s.lastColumn}>
						<p className={s.listTitle}>Зворотній зв’язок</p>
						<p className={s.listText}>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
						<form className={s.form}>
							<input
								className={s.input}
								type="email"
								name="email"
								placeholder="Email Address"
								required
							/>
							<button className={s.button} type="submit">
								Надіслати
							</button>
						</form>

						<ul className={s.contactList}>
							<li className={s.contactItem}>
								<a className={s.contactLink} href="tel:380735555555">
									<svg className={s.contactIcon} width="24" height="24">
										<use href={`${sprite}#icon-phone-1`} />
									</svg>
									<span className={s.contactText}>+ 38 (073) 555 55 55</span>
								</a>
							</li>

							<li className={s.contactItem}>
								<a className={s.contactLink} href="mailto:gmail@gmail.com">
									<svg className={s.contactIcon} width="24" height="24">
										<use href={`${sprite}#icon-sms`} />
									</svg>
									<span className={s.contactText}>gmail@gmail.com</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={s.bottomBlock}>
					<p className={s.reserved}>2024 @ Sprinters. All rights reserved.</p>
					<ul className={s.bottomSocList}>
						<li className={s.bottomSocItem}>
							<svg className={s.bottomSocIcon} width="24" height="24">
								<use href={`${sprite}#icon-facebook-footer`}></use>
							</svg>
						</li>

						<li className={s.bottomSocItem}>
							<svg className={s.bottomSocIcon} width="24" height="24">
								<use href={`${sprite}#icon-instagram-footer`}></use>
							</svg>
						</li>

						<li className={s.bottomSocItem}>
							<svg className={s.bottomSocIcon} width="24" height="24">
								<use href={`${sprite}#icon-web-footer`}></use>
							</svg>
						</li>

						<li className={s.bottomSocItem}>
							<svg className={s.bottomSocIcon} width="24" height="24">
								<use href={`${sprite}#icon-linkedin-footer`}></use>
							</svg>
						</li>

						<li className={s.bottomSocItem}>
							<svg className={s.bottomSocIcon} width="24" height="24">
								<use href={`${sprite}#icon-twitter-footer`}></use>
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
