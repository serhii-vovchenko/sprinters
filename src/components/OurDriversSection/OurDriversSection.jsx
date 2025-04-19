import s from './OurDriversSection.module.css';
import { carrierData } from '../../db/data.js';
import sprite from '../../assets/images/sprite.svg';

const OurDriversSection = () => {
	const { drivers } = carrierData;

	return (
		<section className={s.section}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.headWrapper}>
					<h3 className={s.title}>Наші водії</h3>
					<button className={s.button} type="button">
						Усі водії (7)
					</button>
				</div>
				<ul className={s.list}>
					{drivers.map((driver, index) => {
						return (
							<li key={index} className={s.item}>
								<div className={s.avatarThumb}>
									<img
										className={s.avatarImg}
										src={`/img/avatar/${driver.avatar}`}
										alt={driver.name}
										width="80"
										height="80"
									/>
								</div>

								<div className={s.driverInfoBox}>
									<p className={s.driverName}>{driver.name}</p>
									<p className={s.driverExperience}>{`Досвід роботи: ${driver.experience}`}</p>
								</div>

								<ul className={s.socList}>
									<li className={s.socItem}>
										<a className={s.socLink} href={driver.instagram}>
											<svg className={s.socIcon} width="24" hanging="24">
												<use href={`${sprite}#icon-instagram`} />
											</svg>
										</a>
									</li>

									<li className={s.socItem}>
										<a className={s.socLink} href={driver.instagram}>
											<svg className={s.socIcon} width="24" hanging="24">
												<use href={`${sprite}#icon-linkedin`} />
											</svg>
										</a>
									</li>
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default OurDriversSection;
