import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Contents from './Contents';
import './App.css';
import ContentStat from './ContentStatus';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ContentStat};
  }

  handleOnContentsChange(stat) {
    this.setState({content: stat});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header onContentsChange={this.handleOnContentsChange} />
          <Contents content={ContentStat.AboutMe}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
