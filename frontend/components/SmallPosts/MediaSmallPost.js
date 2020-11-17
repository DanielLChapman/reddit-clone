import React, { Component } from 'react';

import PropTypes from 'prop-types';
class MediaSmallPost extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div>
                Media
            </div>
        );
    }
}


MediaSmallPost.propTypes = {
    data: PropTypes.object
};

export default MediaSmallPost;