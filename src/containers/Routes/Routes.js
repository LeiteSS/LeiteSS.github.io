import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Where from '../Where'
import Works from '../Works'
import Intro from '../Intro'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Intro} />
        <Route exact path="/where" component={Where} />
        <Route exact path="/works" component={Works} />
    </BrowserRouter>
);

export default Routes