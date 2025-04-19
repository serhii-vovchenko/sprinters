import s from './CarrierGallery.module.css';

const CarrierGallery = ({ gallery }) => {
	return (
		<ul className={s.list}>
			{gallery.map((image, index) => {
				return (
					<li className={s.item} key={index}>
						<img className={s.image} src={`/img/${image}`} alt="car photo" />
					</li>
				);
			})}
		</ul>
	);
};

export default CarrierGallery;
