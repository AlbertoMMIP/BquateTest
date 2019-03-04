import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { Home } from './components/home/Home';
import MainOne from './components/challengeOne/MainOne';
import MainTwo from './components/challengeOne/MainTwo';
import MainThree from './components/challengeOne/MainThree';

export const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/one' component={MainOne} />
        <Route exact path='/two' component={MainTwo} />
        <Route exact path='/three' component={MainThree} />
    </Switch>
);