import React, { Component } from 'react';
import Header from './Header';
import { useRouter } from 'next/router'

class HomePageClass extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}



const Page = (props) => {
    const router = useRouter();
    if (router) {
        if (router.pathname === '/') {
            return <HomePageClass {...props} />
        }
        else if (router.pathname === '/r/[subreddit]') {
            console.log('Subreddit');
        }
    }
    
    //need some for accounts and settings
    return <HomePageClass {...props} />
}

export default Page;