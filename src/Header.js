import React from 'react';
import { FlatButton } from 'material-ui'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <FlatButton label="About me" />
        <FlatButton label="Contact" />
      </div>
    );
  }
}
