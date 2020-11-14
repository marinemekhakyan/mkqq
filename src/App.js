import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IngredientChecklist from './components/IngredientChecklist';
import LoadingPage from './components/LoadingPage';
import Nav from './components/Nav'
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/planner' component={IngredientChecklist} /> {/*The switch tags will eventually wrap pages*/}
      <Route path='/dinners' component={LoadingPage} /> {/*The switch tags will eventually wrap pages*/}
      </Switch>
    </div>
  );
}

export default App;
