import s from './ServicesSection.module.css';
import sprite from '../../assets/images/sprite.svg';
import { carrierData } from '../../db/data.js';

const ServicesSection = () => {
	const { services } = carrierData;

	return (
		<section className={s.section}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.headContainer}>
					<h3 className={s.title}>Сервіс</h3>
					<p className={s.description}>Найкращі умови для вашого комфорту</p>
				</div>
				<ul className={s.list}>
					{services?.map((service, index) => {
						return (
							<li key={index} className={s.item}>
								<svg className={s.serviceIcon} width="48" height="48">
									<use href={`${sprite}#${service.icon}`} />
								</svg>
								<h4 className={s.serviceName}>{service.service.replace(/-/g, '\u2011')}</h4>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default ServicesSection;
