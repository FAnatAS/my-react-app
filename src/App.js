// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Ciao from './components/Ciao';

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

const user = {
  fname:'Elon',
  sname: 'Musk'
}
return <>
<Ciao name={`${user.fname} ${user.sname}`} />
<Ciao name='Elen' />
<Ciao name='Tim Lee' />
</>

}

export default App;
