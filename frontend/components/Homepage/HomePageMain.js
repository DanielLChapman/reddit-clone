import React, { Component } from 'react';
import FilterBar from '../FilterBar';
import SmallPosts from '../SmallPosts';

class HomePageMain extends Component {
    render() {
        return (
            <main className="homepage-grid-container">
                <section className="homepage-left">
                    <FilterBar />
                    <SmallPosts />
                </section>
                <section className="homepage-right">

                </section>
            </main>
        );
    }
}

export default HomePageMain;