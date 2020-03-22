import React from 'react';
import Event from './Event/Event.jsx';
import s from "./Lenta.module.css";
import {getEventsActionCreator} from '../../redux/state.js';

const Lenta = (props) => {
	const getEvents = getEventsActionCreator();

	const events = props.dispatch(getEvents).map( event => {
		return <Event name={event.name} type={event.type} info={event.info} />;
	});
	
	return (
		<div className={s.Lenta}>
			<div className={`${s.head}`}>Лента Мероприятий</div>
			<div className={`${s.overflowX}`}>
				{events}
			</div>
		</div>
	);
}

export default Lenta;