import s from './TripCalendar.module.css';
import sprite from '../../../assets/images/sprite.svg';

const TripCalendar = () => {
	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Календар поїздок</h3>
			<div className={s.calendarBox}>
				<button className={s.button} type="button">
					<svg className={s.buttonSvg} width="20" height="20">
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
					<span className={s.buttonText}>Купити квиток</span>
				</button>
				<div className={s.calendarContainer}>
					<p>Календар</p>
				</div>
			</div>
		</div>
	);
};

export default TripCalendar;
