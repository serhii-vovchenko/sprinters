import s from './ReviewItem.module.css';
import sprite from '../../../assets/images/sprite.svg';

const ReviewItem = ({ review }) => {
	const { avatar, name, city, date, text } = review;
	return (
		<li className={s.item}>
			<div className={s.headContainer}>
				<div className={s.avatarThumb}>
					<img src={`/img/avatar/${avatar}`} alt={name} width="72" height="72" />
				</div>
				<div className={s.clientInfo}>
					<p className={s.clientName}>{name}</p>
					<p className={s.clientCity}>{city}</p>
					<p className={s.date}>{date}</p>
				</div>
			</div>

			<div className={s.reviewWrapper}>
				<p className={s.reviewText}>{text}</p>
				<ul className={s.ratingList}>
					<li className={s.ratingItem}>
						<svg className={s.starIcon} width="17" height="17">
							<use href={`${sprite}#icon-star`} />
						</svg>
					</li>

					<li className={s.ratingItem}>
						<svg className={s.starIcon} width="17" height="17">
							<use href={`${sprite}#icon-star`} />
						</svg>
					</li>

					<li className={s.ratingItem}>
						<svg className={s.starIcon} width="17" height="17">
							<use href={`${sprite}#icon-star`} />
						</svg>
					</li>

					<li className={s.ratingItem}>
						<svg className={s.starIcon} width="17" height="17">
							<use href={`${sprite}#icon-star`} />
						</svg>
					</li>

					<li className={s.ratingItem}>
						<svg className={s.starIcon} width="17" height="17">
							<use href={`${sprite}#icon-star`} />
						</svg>
					</li>
				</ul>
			</div>
		</li>
	);
};

export default ReviewItem;
