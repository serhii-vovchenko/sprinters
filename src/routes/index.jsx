import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import CarrierProfilePage from '../pages/CarrierProfile/CarrierProfilePage.jsx';
import AboutPage from '../pages/About/AboutPage.jsx';
import CarriersPage from '../pages/Carriers/CarriersPage.jsx';
import NotFoundPage from '../pages/NotFound/NotFoundPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'carriers', element: <CarriersPage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'carrier-profile', element: <CarrierProfilePage /> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
]);

export default router;
