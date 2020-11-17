import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextSmallPost extends Component {
    render() {
        let afterClass = "";
        if (this.props.data.description.split('').length > 550) {
            afterClass = "use-after"
        }
        if (this.props.data.link !== '') {
            return (
                <>
                    <h3>Link</h3>
                </>
            )
        }
        return (
            <>
                <h4>{this.props.data.title}</h4>
                <section className={`reddit-post-right-bottom-description ${afterClass}`} >
                    <span>{this.props.data.description}</span>
                </section>
            </>
        );
    }
}

TextSmallPost.propTypes = {
    data: PropTypes.object
};

export default TextSmallPost;