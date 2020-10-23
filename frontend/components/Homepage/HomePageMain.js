import React, { Component } from 'react';
import FilterBar from '../FilterBar';

class HomePageMain extends Component {
    render() {
        return (
            <main className="homepage-grid-container">
                <section className="homepage-left">
                    <FilterBar />
                </section>
                <section className="homepage-right">

                </section>
            </main>
        );
    }
}

export default HomePageMain;