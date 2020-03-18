import React from 'react';
import s from "./Lenta.module.css";

function Lenta() {
	return (
		<div className={s.Lenta}>
			<div className={`${s.head}`}>Лента событий</div>
			<div className={`${s.overflowX}`}>
				<div className={`${s.ivent}`}>Событие 1</div>
				<div className={`${s.ivent}`}>Событие 2</div>
				<div className={`${s.ivent}`}>Событие 3</div>
				<div className={`${s.ivent}`}>Событие 4</div>
				<div className={`${s.ivent}`}>Событие 5</div>
				<div className={`${s.ivent}`}>Событие 6</div>
			</div>
		</div>
	);
}

export default Lenta;
