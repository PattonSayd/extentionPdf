import React from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/Navbar';
import Content from './components/Content';


const App = () =>{
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      
    </div>
  );
}

export default App;
