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

    const style = {
      iconButton: {
        padding:     '0px'
      },
      icon: {
        textAlign:     'center',
        verticalAlign: 'bottom',
        position:      'absolute',
        top:         '0px',
        left:        '0px',
        fontSize:   '30px',
        width:      '48px',
        height:     '48px',
        lineHeight: '51px'
      }
    };

    return data.map( (social) => (
        <IconButton 
          key={social.name}
          iconClassName={social.icon} 
          href={social.url} 
          target="_blank" 
          iconStyle={style.icon} />
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
        height: '500px',
        maxWidth:  '450px',
        margin:  '20px auto',
        textAlign: 'center',
      },
      avatar: {
        display: 'block',
        margin:  '0 auto'
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
