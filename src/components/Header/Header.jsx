import React from 'react';
import s from "./Header.module.css";
import "../LinkStyle/LinkStyle.css";
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<div className={s.Header}>
			<div className={s.buttons}>
				<NavLink to="/Registration" className={s.button}>
					Вход
				</NavLink>
				<div className={s.partition}></div>
				<NavLink to="/Registration" className={s.button}>
					Регистрация
				</NavLink>
			</div>

		</div>
	);
}

export default Header;