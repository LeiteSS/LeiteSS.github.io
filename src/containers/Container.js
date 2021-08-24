import React from 'react'

import './Container.scss'

const Container = ({ children }) => (
    <main className="app-container">
        {children}
    </main>
)

export default Container