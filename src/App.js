import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Planner from './pages/Planner';
import Nav from './components/Nav'
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path='/planner' component={IngredientChecklist} /> {/*The switch tags will eventually wrap pages*/}
      </Switch>
    </div>
  );
}

export default App;
