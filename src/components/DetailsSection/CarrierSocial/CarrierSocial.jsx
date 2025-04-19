import s from './CarrierSocial.module.css';
import sprite from '../../../assets/images/sprite.svg';

const CarrierSocial = ({ social }) => {
	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Ми у соц. мережах</h3>
			<ul className={s.list}>
				{social.map((soc, index) => {
					return (
						<li className={s.item} key={index}>
							<a className={s.link} href={soc.link}>
								<svg className={s.socIcon} width="24" height="24">
									<use href={`${sprite}#${soc.icon}`} />
								</svg>
								<span className={s.text}>{soc.link}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CarrierSocial;
