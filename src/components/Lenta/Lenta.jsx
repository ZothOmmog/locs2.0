import React from 'react';
import Event from './Event/Event.jsx';
import s from "./Lenta.module.css";

const Lenta = () => {
	let str = "Съешь ещё этих сладких французских булок и выпей чаю ";
	let eventInfo = str.repeat(23);

	let Events = []
	for (let i = 0; i < 25; i++) {
		Events.push(
			{ name: `Мероприятие ${i}`, 
			  type: `Тип мероприятия ${i}`, 
			  info: eventInfo }
		);
	}

	let EventsJSX = Events.map(event => {
		return <Event name={event.name} type={event.type} info={event.info} />
	});

	return (
		<div className={s.Lenta}>
			<div className={`${s.head}`}>Лента событий</div>
			<div className={`${s.overflowX}`}>
				{EventsJSX}
			</div>
		</div>
	);
}

export default Lenta;
