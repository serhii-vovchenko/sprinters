import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // базові стилі

const MyCalendar = () => {
	const [value, setValue] = useState(new Date());

	return <Calendar onChange={setValue} value={value} locale="uk-UA" />;
};

export default MyCalendar;
