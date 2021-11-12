// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
//return <h1>Hi, JSX! </h1>
return <>
<Greeting name='Elon Musk' greet='Hello'/>
<Greeting name='Elen' greet='Hi'/>
<Greeting name='Tim Lee' greet='Bye'/>
</>

}

export default App;
