import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesApp from '../Recepti/RecipesApp';
import Recipe from '../Recepti/Recipe';

const Router = (props) => {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/"  component={RecipesApp} exact/>
          <Route path="/recipe/:id"  component={Recipe}/>
        </Switch>     
        </BrowserRouter>
    );
};

export default Router;