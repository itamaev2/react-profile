import React from 'react';
import { FlatButton } from 'material-ui'
import ContentStat from './ContentStatus'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <FlatButton label="About me" onClick={ () => this.props.onContentsChange(ContentStat.AboutMe) } />
        <FlatButton label="Contact" onClick={ () => this.props.onContentsChange(ContentStat.Contact) } />
      </div>
    );
  }
}
