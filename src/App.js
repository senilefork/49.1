import React from 'react';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Peanuts from './Peanuts';
import Pretzels from './Pretzels';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
        <VendingMachine />
        </Route>
        <Route exact path='/chips'>
         <Chips />
        </Route>
        <Route exact path ='/peanuts'>
         <Peanuts />
        </Route>
        <Route exact path='/pretzels'>
         <Pretzels />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
