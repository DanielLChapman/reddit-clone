import React, { Component } from 'react';

import PropTypes from 'prop-types';

class MediaSmallPost extends Component {
    constructor(props) {
        super(props);
    }

    getMediaCode = (inputURL) => {
        let beginning = inputURL;
        
        if(beginning.includes('youtube')) {
            let video_id = beginning.split('v=')[1];
            let ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
            }
            return (<div className="small-post-youtube-media-container">
                <iframe className="small-post-youtube-video" width="560" height="315" src={`https://www.youtube.com/embed/${video_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {inputURL}
                </div>
            )
        } else if (beginning.includes('vimeo')) {
            return (<>
                <iframe src={inputURL} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                {inputURL}
                </>
            )
        }
        else if (beginning.includes('imgur')) {
            let imgur_id = beginning.split('/');
            imgur_id = imgur_id[4];

            return (
                <>
                    <blockquote className="imgur-embed-pub" lang="en" data-id={`a/${imgur_id}`}  >
                        <a href={`//imgur.com/a/${imgur_id}`}> View On Imgur </a>
                    </blockquote>
                    <script async src="//s.imgur.com/min/embed.js" charSet="utf-8"></script>
                </>


               
            )
        }
        else {
            return (
                <img src={inputURL} />
            )
        }

    }
    
    render() {
        return (
            <>
                <h4>{this.props.data.title}</h4>
                <section className={`reddit-post-right-bottom-media`} >
                    {this.getMediaCode(this.props.data.media.link)}
                </section>
                
            </>
        );
    }
}


MediaSmallPost.propTypes = {
    data: PropTypes.object
};

export default MediaSmallPost;