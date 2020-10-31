import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './footer';
import { Galerija } from './galerija';
import './index.css';
import { Kontakt } from './kontakt';
import { Meni } from './meni';
import { Navigacija } from './navigacija';
import { PocetnaStrana } from './pocetna';

const App = () => {
  return(
    <>
    <Navigacija/>
    <PocetnaStrana/>
    <Galerija/>
    <Meni/>
    <Kontakt/>
    <Footer/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);