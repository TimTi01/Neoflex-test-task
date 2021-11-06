import React from 'react';
import {Route, Switch} from "react-router-dom";
import {FirstForm} from "../Pages/FirstForm";
import {SecondForm} from "../Pages/SecondForm";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={FirstForm}/>
            <Route exact path='/lastForm' component={SecondForm}/>
        </Switch>
    );
};