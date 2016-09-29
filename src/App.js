import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Contents from './Contents';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Contents />
        </div>
      </MuiThemeProvider>
    );
  }
}
