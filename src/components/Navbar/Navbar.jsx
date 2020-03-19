import React from 'react';
import "../StyleButton/Button.css";
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className={s.Navbar}>
			<div className={s.events}>
				<NavLink to="/Lenta" className="button">
					Лента Мероприятий
				</NavLink>

				<NavLink to="/AddIvent" className="button">
					Новое Мероприятие
				</NavLink>
			</div>
		</div>
	);
}

export default Navbar;
