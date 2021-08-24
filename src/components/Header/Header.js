import React from 'react'

import Menu from '../Menu/Menu'

import './Header.scss'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo"/>
        <Menu />
    </header>
)

export default Header