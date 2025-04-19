import s from './DetailsSection.module.css';
import CarrierGallery from './CarrierGallery/CarrierGallery';
import CarrierDescription from './CarrierDescription/CarrierDescription';
import CountryList from './CountryList/CountryList';
import TripCalendar from './TripCalendar/TripCalendar';

import { carrierData } from '../../db/data.js';
import CarrierSocial from './CarrierSocial/CarrierSocial.jsx';

const DetailsSection = () => {
	const { description, gallery, countries, social } = carrierData;

	return (
		<section className={s.section}>
			<div className={`container ${s.wrapper}`}>
				<div className={s.firstColumn}>
					<div className={s.headBlock}>
						<CarrierDescription description={description} />
						<CarrierSocial social={social} />
					</div>
					<CarrierGallery gallery={gallery} />
				</div>
				<div className={s.secondColumn}>
					<CountryList countries={countries} />
					<TripCalendar />
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
