import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import IngredientChecklist from './components/IngredientChecklist';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' component={IngredientChecklist} />
      </Switch>
    </div>
  );
}

export default App;
