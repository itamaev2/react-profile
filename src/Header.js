import React from 'react';
import { FlatButton } from 'material-ui'
import ContentStat from './ContentStatus'
import AppBar from 'material-ui/AppBar';


export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <AppBar 
          iconElementRight={
            <div>
              <FlatButton label="About me" onClick={ () => this.props.onContentsChange(ContentStat.AboutMe) } />
              <FlatButton label="Status" onClick={ () => this.props.onContentsChange(ContentStat.Status) } />
            </div>
          }
        />
      </div>
    );
  }
}
