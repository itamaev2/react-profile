import React from 'react';
import { Card, CardTitle, CardText, CardActions, IconButton } from 'material-ui';
import $ from 'jquery';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', comment: '' };
  }

  componentWillMount() {
    $.getJSON('./json/about_me.json', function (data) {
      this.setState(data);
    }.bind(this));
  }

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
          <CardTitle title={this.state.name} />
          <CardText>
            {this.state.comment}
          </CardText>
          <CardActions>
            <IconButton iconClassName="muidocs-icon-custom-github" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
