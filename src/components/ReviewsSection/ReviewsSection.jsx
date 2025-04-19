import s from './ReviewsSection.module.css';
import { carrierData } from '../../db/data.js';
import ReviewItem from './ReviewItem/ReviewItem.jsx';

const ReviewsSection = () => {
	const { reviews } = carrierData;

	return (
		<section className={s.section}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.firstColumn}>
					<h2 className={s.title}>
						Що <span>кажуть люди?</span>
					</h2>
					<p className={s.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<button className={s.button}>Залишити відгук</button>
				</div>
				<div className={s.secondColumn}>
					<ul className={s.list}>
						{reviews.map((review, index) => {
							return <ReviewItem key={index} review={review} />;
						})}
					</ul>
					<div className={s.bulletBox}>
						<span className={s.activeBullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
						<span className={s.bullet}></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReviewsSection;
