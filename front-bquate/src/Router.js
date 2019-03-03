import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { Home } from './components/home/Home';
import MainOne from './components/challengeOne/MainOne';

export const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/one' component={MainOne}  />
    </Switch>
);