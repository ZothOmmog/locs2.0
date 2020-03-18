import React from 'react';
import s from  "./Navbar.module.css";

function Navbar() {
	return (
		<div className={s.Navbar}>
			<div className={`${s.nav1} ${s.button}`}>btn1</div>
			<div className={`${s.nav2} ${s.button}`}>btn2</div>
			<div className={`${s.nav3} ${s.button}`}>btn3</div>
			<div className={`${s.nav4} ${s.search}`}>
				<input type="text" placeholder="Поиск..."/>
				<div className="button">Найти</div>
			</div>
		</div>
	);
}

export default Navbar;
