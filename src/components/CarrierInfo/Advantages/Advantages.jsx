import s from './Advantages.module.css';
import sprite from '../../../assets/images/sprite.svg';

const Advantages = ({ advantages }) => {
	return (
		<ul className={s.list}>
			{advantages.map((item, index) => {
				return (
					<li className={s.item} key={index}>
						<div className={s.iconThumb}>
							<svg className={s.itemSvg} width="24" height="24">
								<use href={`${sprite}#${item.icon}`} />
							</svg>
						</div>
						<div>
							<p className={s.title}>{item.title}</p>
							<p className={s.value}>{item.value}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Advantages;
