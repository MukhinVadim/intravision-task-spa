import React from "react"
import People from "../../Assets/img/people.png"
import Book from "../../Assets/img/book.png"
import City from "../../Assets/img/city.png"
import File from "../../Assets/img/file.png"
import Analytics from "../../Assets/img/analytics.png"
import Logo from "../../Assets/img/logo.png"
import Settings from "../../Assets/img/settings.png"

import styles from "./Header.module.css"
import search from "../../Assets/img/search.png"
import { NavLink } from "react-router-dom"


export const Header: React.FC = () => {
	return (
		<>
			<nav className={ styles.sidebarWrapper }>
				<div className={ styles.sidebarContainer }>
					<img src={ Logo } alt="Logo" className={styles.logo}/>
					<div className={ styles.toggleContainer }>
						<NavLink to="/base" activeClassName={ styles.activeLink }>
							<img src={ Book } alt="ico"/>
							<span>
								База знаний
							</span>
						</NavLink>
						<NavLink to="/tasks" activeClassName={ styles.activeLink }>
							<img src={ File } alt="ico"/>
							<span>
								Заявки
							</span>
						</NavLink>
						<NavLink to="/staff" activeClassName={ styles.activeLink }>
							<img src={ People } alt="ico"/>
							<span>
								Сотрудники
							</span>
						</NavLink>
						<NavLink to="/clients" activeClassName={ styles.activeLink }>
							<img src={ City } alt="ico"/>
							<span>
								Клиенты
							</span>
						</NavLink>
						<NavLink to="/archive" activeClassName={ styles.activeLink }>
							<img src={ Analytics } alt="ico"/>
							<span>
								Архивы
							</span>
						</NavLink>
						<NavLink to="/settings" activeClassName={ styles.activeLink }>
							<img src={ Settings } alt="ico"/>
							<span>
								Настройки
							</span>
						</NavLink>
					</div>
				</div>
			</nav>
			<div className={ styles.headWrapper }>
				<div className={ styles.inputContainer }>
					<input type="text"/>
					<img src={ search } alt="search"/>
				</div>
			</div>
		</>
	)
}