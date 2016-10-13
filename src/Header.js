import React from 'react';
import { FlatButton } from 'material-ui'
import ContentStat from './ContentStatus'
import AppBar from 'material-ui/AppBar';


export default class Header extends React.Component {
  getButton() {
    if (this.props.content === ContentStat.AboutMe) {
      return (
              <FlatButton label="Status" onClick={ () => this.props.onContentsChange(ContentStat.Status) } />
      );
    } else {
      return (
              <FlatButton label="About me" onClick={ () => this.props.onContentsChange(ContentStat.AboutMe) } />
      );
    }
  }

  render() {
    return (
      <div className="header">
        <AppBar 
          title={this.props.content === ContentStat.AboutMe ? "About me" : "Status"}
          showMenuIconButton={false}
          iconElementRight={
            this.getButton()
          }
        />
      </div>
    );
  }
}
