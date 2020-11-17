import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import Link from 'next/link';

import MediaSmallPost from './SmallPosts/MediaSmallPost';
import TextSmallPost from './SmallPosts/TextSmallPost';

const TextPost = (props) => {
    
    //need some for accounts and settings
    return (
        <>
            Text Post
        </>
    )
}

class SmallPosts extends Component {
    constructor(props) {
        super(props);
    }
    convertDateFromNow = (date) => {
        let today = new Date();
        let calculatedSeconds = Math.abs((today - new Date(date))/1000);

        if (calculatedSeconds >= 31556952) {
            return `${Math.floor(calculatedSeconds/31556952)} year${Math.floor(calculatedSeconds/31556952) >= 2 ? 's': ''}  ago`;
        } else if (calculatedSeconds >= 2592000) {
            return `${Math.floor(calculatedSeconds/2592000)} month${Math.floor(calculatedSeconds/2592000) >= 2 ? 's': ''} ago`;
        } else if (calculatedSeconds >= 86400) {
            return `${Math.floor(calculatedSeconds/86400)} day${Math.floor(calculatedSeconds/86400) >= 2 ? 's': ''} ago`
        } else if (calculatedSeconds >= 3600) {
            return `${Math.floor(calculatedSeconds/3600)} hour${Math.floor(calculatedSeconds/3600) >= 2 ? 's': ''} ago`
        } 
        return `${Math.floor(calculatedSeconds/60)} minute${Math.floor(calculatedSeconds/60) >= 2 ? 's': ''} ago`
    } 
    convertCommentCount = (comments) => {
        if (comments < 1000) {
            return comments;
        }
        if (comments < 1000000) {
            let newVal = comments / 1000;
            newVal = newVal.toFixed(1);
            return newVal + "k"
        }
        else {
            let newVal = comments / 1000000;
            newVal = newVal.toFixed(1);
            return newVal + "milion"
        }

    }

    render() {
        return (
            <section className="reddit-post" onClick={() => {window.location.href=`/r/${this.props.postInformation.subreddit}/comments/${this.props.postInformation.id}`}}>
                <section className="reddit-post-left">
                 {/*upvote, downvote and current score*/}
                 <FaLongArrowAltUp />
                 <br />
                 <span>{this.props.postInformation.score}</span>
                 <br />
                 <FaLongArrowAltDown />
                </section>
                <section className="reddit-post-right">
                    <section className="reddit-post-right-top">
                        <Link href={`../r/${this.props.postInformation.subreddit}`}>
                            <a><b>r/{this.props.postInformation.subreddit}</b></a>
                        </Link>
                        <span>&nbsp;•&nbsp;</span>
                        <span>Posted by&nbsp;
                            <Link href={`../u/${this.props.postInformation.user}`}>
                            <a>u/{this.props.postInformation.user}</a>
                        </Link>
                        </span>
                        &nbsp;
                        <span>Posted {this.convertDateFromNow(this.props.postInformation.posted)}</span>
                    </section>
                    <section className="reddit-post-right-bottom">
                        {
                            this.props.postInformation.media.link === '' ? <TextSmallPost data={this.props.postInformation} /> : <MediaSmallPost data={this.props.postInformation} />
                        }
                    </section>
                    <section className="reddit-post-right-bottom-footer">
                        <span onClick={() => {window.location.href=`/r/${this.props.postInformation.subreddit}/comments/${this.props.postInformation.id}`}}>{this.convertCommentCount(this.props.postInformation.comments)} Comments</span>
                    </section>

                </section>

            </section>
        );
    }
}

SmallPosts.propTypes = {
    postInformation: PropTypes.object
};

SmallPosts.defaultProps = {
    postInformation: {
        title: 'That iPad is a cyber threat',
        //supported media : image, youtube, vimeo, imgur
        media: {
            link: '',//'https://images.unsplash.com/photo-1603676270409-962bb132b1a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            type: 'image',
        },
        //description: 'test',
        description: "From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference ",
        //description: 'From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference From the cyber security conference ',
        user: 'FakeAccount',
        subreddit: 'FakeSubreddit',
        awards: [],
        comments: 231000,
        link: '',
        score: 1,
        posted: new Date('10/30/2019'),
        id: '7njpss3'
    },
};
//
//<blockquote class="imgur-embed-pub" lang="en" data-id="a/1RIvWNR"  ><a href="//imgur.com/a/1RIvWNR">“Pull harder, little one”</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

export default SmallPosts;