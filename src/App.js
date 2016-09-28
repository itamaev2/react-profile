import React from 'react';
import Header from './Header';
import Contents from './Contents';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Contents />
      </div>
    );
  }
}
