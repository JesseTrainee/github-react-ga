import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/repositories';
import Main from './pages/main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )

} 