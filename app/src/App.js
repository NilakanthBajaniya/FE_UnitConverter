import './App.css';
import Login from './Frontend/login';
import Converter from './Frontend/Converter';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    this.changeState.bind(this);
  }

  username = '';
  changeState = (username) => {

    this.username = username;
    this.setState({ isLogin: true });
  }
  render() {
    return this.state.isLogin ? <Converter username={this.username} /> : <Login changeState={this.changeState} />;
  }

}

export default App;
