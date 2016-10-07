import React from 'react';
import { Avatar, Card, CardHeader, CardTitle, CardText, CardActions, IconButton } from 'material-ui';
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
    return data.map( (social) => (
        <IconButton 
          key={social.name}
          iconClassName={social.icon} 
          href={social.url} 
          target="_blank" 
          iconStyle={{display: 'block', margin: '0 auto', fontSize: '50px'}} />
      )
    );
  }

  componentWillMount() {
    $.getJSON('./json/about_me.json', function (data) {
      this.setState(data);
    }.bind(this));
  }

  render() {
    const style = {
      card: {
        height: 500,
        width: 500,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
      },
      avatar: {
        display: 'block',
        margin: '0 auto'
      }
    };

    return (
      <div className="abount_me">
        <Card style={style.card}>
          <CardHeader>
            <Avatar src="image/itamaev2_icon.jpg" size={90} style={style.avatar} />
          </CardHeader>
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
