import React from 'react';
import Header from './components/Header/Header';
import Appbody from './components/Appbody/Appbody';
import s from './App.module.css'

function App(props) {
  return (
    <div className={s.wrapper}>
      <Header />
      <Appbody state={props.state} />
    </div>
  );
}

export default App;
