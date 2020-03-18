import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className={s.Navbar}>
			<NavLink to="/Lenta" className={`${s.nav1} ${s.button}`}>
			Лента событий			
			</NavLink>

			<NavLink to="/AddIvent" className={`${s.nav2} ${s.button}`}>
			Новое событие
			</NavLink>

			<NavLink to="/Registration" className={`${s.nav3} ${s.button}`}>
			Регистрация
			</NavLink>

			<div className={`${s.nav4} ${s.search}`}>
				<input type="text" placeholder="Поиск..." />
				<div className={s.button}>Найти</div>
			</div>

		</div>
	);
}

export default Navbar;
