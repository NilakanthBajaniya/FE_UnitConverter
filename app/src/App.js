// import logo from './logo.svg';
import './App.css';
import Login from './login';
import Tab from './tab';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';

function App() {
  const history=useHistory();
  return (
   
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   <Login />
    // </div>
    <div className="">

      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/tab">
            <Tab />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
