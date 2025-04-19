import s from './CarrierInfo.module.css';

import { carrierData } from '../../db/data.js';
import CarrierName from './CarrierName/CarrierName.jsx';
import CompanyLogo from './CompanyLogo/CompanyLogo.jsx';
import CarrierContacts from './CarrierContacts/CarrierContacts.jsx';
import Advantages from './Advantages/Advantages.jsx';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

const CarrierInfo = () => {
	const { name, trips, image, website, phone, advantages } = carrierData;

	return (
		<section className={s.section}>
			<div className={`container ${s.wrapper}`}>
				<Breadcrumbs />
				<div className={s.bottomContainer}>
					<CompanyLogo image={image} />
					<div className={s.secondColumn}>
						<div className={s.contactsBox}>
							<CarrierName name={name} trips={trips} />
							<CarrierContacts website={website} phone={phone} />
						</div>
						<Advantages advantages={advantages} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarrierInfo;
