import s from './CountryList.module.css';
import sprite from '../../../assets/images/sprite.svg';

const CountryList = ({ countries }) => {
	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Обслуговуємо країни</h3>
			<ul className={s.list}>
				{countries.map((country, index) => {
					return (
						<li className={s.item} key={index}>
							<svg className={s.flagIcon} width="42" height="32">
								<use href={`${sprite}#${country.flagIcon}`} />
							</svg>
							<p className={s.countryName}>{country.country}</p>
						</li>
					);
				})}
			</ul>
			<button className={s.button} type="button">
				<span className={s.buttonText}>Усі країни</span>
				<svg className={s.buttonIcon} width="14" height="7">
					<use href={`${sprite}#icon-arrow-down`} />
				</svg>
			</button>
		</div>
	);
};

export default CountryList;
