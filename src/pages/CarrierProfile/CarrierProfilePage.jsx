import s from './CarrierProfilePage.module.css';
import CarrierInfo from '../../components/CarrierInfo/CarrierInfo';
import DetailsSection from '../../components/DetailsSection/DetailsSection';
import OurDriversSection from '../../components/OurDriversSection/OurDriversSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';

const CarrierProfilePage = () => {
	return (
		<div className={s.wrapper}>
			<CarrierInfo />
			<DetailsSection />
			<OurDriversSection />
			<ServicesSection />
			<ReviewsSection />
		</div>
	);
};

export default CarrierProfilePage;
