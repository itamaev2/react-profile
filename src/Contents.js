import React from 'react';
import AboutMe from './AboutMe';
import Status from './Status';
import content_stat from './ContentStatus';

export default class Contents extends React.Component {
  render() {
    var content = <AboutMe />
    if (this.props.content === content_stat.AboutMe) {
      content = <AboutMe />;
    } else if (this.props.content === content_stat.Status) {
      content = <Status />;
    } else {
      content = <AboutMe />;
    }

    return (
      <div className="contents">
        {content}
      </div>
    );
  }
}
