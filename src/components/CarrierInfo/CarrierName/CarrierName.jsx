import s from './CarrierName.module.css';

const CarrierName = ({ name, trips }) => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>{name}</h1>
			<p className={s.trips}>{`${trips} Поїздок`}</p>
		</div>
	);
};

export default CarrierName;
