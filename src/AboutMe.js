import React from 'react';
import { Card, CardTitle, CardText, CardActions, IconButton } from 'material-ui';
import $ from 'jquery';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', comment: '' };
    this.createSocialLink = this.createSocialLink.bind(this);
  }

  createSocialLink(data) {
    if (!data ) {
      return ;
    } 
    return data.map( (social) => {
        return (<IconButton key={social.name} iconClassName={social.icon} href={social.url} target="_blank" />);
      }
    );
  }

  componentWillMount() {
    $.getJSON('./json/about_me.json', function (data) {
      this.setState(data);
    }.bind(this));
  }

  render() {
    const style = {
      height: 500,
      width: 500,
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
            {this.createSocialLink(this.state.social)}
          </CardActions>
        </Card>
      </div>
    );
  }
}
