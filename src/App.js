import React, { Component } from 'react';
import Routes from './container/routes'


class App extends Component {

  componentDidMount(){
    // store.dispatch(loadUser());
    
  }

  render() {
    return (
      <div className="App">
     
        <Routes />
      
      </div>
    );
  }
}

export default App;
