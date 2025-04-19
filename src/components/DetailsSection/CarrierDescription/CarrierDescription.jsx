import s from './CarrierDescription.module.css';

const CarrierDescription = ({ description }) => {
	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Опис перевізника</h3>
			<p className={s.description}>{description}</p>
		</div>
	);
};

export default CarrierDescription;
