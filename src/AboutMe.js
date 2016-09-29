import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

export default class AboutMe extends React.Component {
  render() {
    const style = {
      height: 300,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };

    return (
      <div className="abount_me">
        <Card style={style}>
          <CardTitle title="About me です。" />
          <CardText>
            About meの説明です。
          </CardText>
        </Card>
      </div>
    );
  }
}
