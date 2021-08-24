import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.scss'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/">
                    Intro
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/where">
                    Where
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/works">
                    Works
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu