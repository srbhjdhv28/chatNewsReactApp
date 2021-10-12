import { Fragment } from 'react';
import HomePage from './components/home/HomePage';

import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
        <Header />
        <HomePage />
    </Fragment>
   
  );
}

export default App;
