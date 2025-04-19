import s from './CarrierContacts.module.css';
import sprite from '../../../assets/images/sprite.svg';

const CarrierContacts = ({ website, phone }) => {
	return (
		<ul className={s.list}>
			<li className={s.item}>
				<a className={s.link} href={website}>
					<svg className={s.websiteIcon} width="24" height="24">
						<use href={`${sprite}#icon-web`} />
					</svg>
					<span className={s.text}>{website}</span>
				</a>
			</li>

			<li className={s.item}>
				<a className={s.link} href={`tel:${phone}`}>
					<svg className={s.phoneIcon} width="24" height="24">
						<use href={`${sprite}#icon-phone`} />
					</svg>
					<span className={s.text}>{phone}</span>
				</a>
			</li>
		</ul>
	);
};

export default CarrierContacts;
