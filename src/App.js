import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import IngredientChecklist from './components/IngredientChecklist';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' component={IngredientChecklist} /> {/*The switch tags will eventually wrap pages*/}
      </Switch>
    </div>
  );
}

export default App;
