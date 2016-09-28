import React from 'react';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
        <div className="header row">
          <Button bsStyle="link" className="col-xs-1 col-xs-offset-8 btn btn-lg"><u>About me</u></Button>
          <Button bsStyle="link" className="col-xs-1 btn btn-lg"><u>Contact</u></Button>
        </div>
    );
  }
}
