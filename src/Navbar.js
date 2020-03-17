import React from 'react';
import "./Navbar.css";

function Navbar() {
	return (
		<div className="Navbar">
			<div className="nav1 button">btn1</div>
			<div className="nav2 button">btn2</div>
			<div className="nav3 button">btn3</div>
			<div className="nav4 search">
				<input type="text" placeholder="Поиск..."/>
				<div className="button">Найти</div>
			</div>
		</div>
	);
}

export default Navbar;
