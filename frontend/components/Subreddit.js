import React, { Component } from 'react';

class Subreddit extends Component {
    render() {
        return (
            <div>
                Subreddit: {this.props.subredditName}
            </div>
        );
    }
}

Subreddit.defaultProps = {
    subredditName: '',
  };


export default Subreddit;