import React from 'react';

import Container from './Container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const App = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
)

export default App