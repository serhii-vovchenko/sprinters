import s from './CompanyLogo.module.css';

const CompanyLogo = ({ image }) => {
	return (
		<div className={s.imageContainer}>
			<img className={s.image} src={`/img/${image}`} alt="company logo" width="172" height="172" />
		</div>
	);
};

export default CompanyLogo;
