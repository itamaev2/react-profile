import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

export default class Contents extends React.Component {
  render() {
    const style = {
      height: 300,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };

    return (
      <div className="contents">
        <Card style={style}>
          <CardTitle title="コンテンツです" />
          <CardText>
            説明です。
          </CardText>
        </Card>
      </div>
    );
  }
}
