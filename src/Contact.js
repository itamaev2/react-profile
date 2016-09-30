import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

export default class Contact extends React.Component {
  render() {
    const style = {
      height: 300,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };

    return (
      <div className="contact">
        <Card style={style}>
          <CardTitle title="Contact です。" />
          <CardText>
            Contact の説明です。
          </CardText>
        </Card>
      </div>
    );
  }
}
