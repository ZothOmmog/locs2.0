import React from 'react';
import Event from './Event/Event.jsx';
import s from "./Lenta.module.css";

const Lenta = () => {
	let str = ("Съешь ещё этих сладких французских булок и выпей чаю ").repeat(23);

	return (
		<div className={s.Lenta}>
			<div className={`${s.head}`}>Лента событий</div>
			<div className={`${s.overflowX}`}>
				<Event name="Мероприятие 1" type="тип мероприятия 1" info={str}/>
				<Event name="Мероприятие 2" type="тип мероприятия 2" info={str}/>
				<Event name="Мероприятие 3" type="тип мероприятия 3" info={str}/>
				<Event name="Мероприятие 4" type="тип мероприятия 4" info={str}/>
				<Event name="Мероприятие 5" type="тип мероприятия 5" info={str}/>
				<Event name="Мероприятие 6" type="тип мероприятия 6" info={str}/>
			</div>
		</div>
	);
}

export default Lenta;
