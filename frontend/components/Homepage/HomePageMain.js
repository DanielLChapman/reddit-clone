import React, { Component } from 'react';
import FilterBar from '../FilterBar';
import SmallPosts from '../SmallPosts';

import {arrayOfSmallPosts } from '../../data/SmallPosts';

class HomePageMain extends Component {
    render() {
        return (
            <main className="homepage-grid-container">
                <section className="homepage-left">
                    <FilterBar />
                    {
                        arrayOfSmallPosts.map((x, i) => {
                            return <SmallPosts postInformation={x} key={i} />
                        })
                    }
                    
                </section>
                <section className="homepage-right">

                </section>
            </main>
        );
    }
}

export default HomePageMain;