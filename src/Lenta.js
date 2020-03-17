import React from 'react';
import "./Lenta.css";

function Lenta() {
	return (
		<div className="Lenta">
			<div className="head elem1">Лента событий</div>
			<div className="overflow-x elem2">
				<div className="ivent">Событие 1</div>
				<div className="ivent">Событие 2</div>
				<div className="ivent">Событие 3</div>
				<div className="ivent">Событие 4</div>
				<div className="ivent">Событие 5</div>
				<div className="ivent">Событие 6</div>
			</div>
		</div>
	);
}

export default Lenta;
