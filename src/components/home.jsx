import React, { Component } from 'react';

class Home extends Component {

    render() {
        return(
            <div className="jumbotron bg-secondary mt-5">
                <div className="container">
                    <h1 className="display-3 text-white mb-3">Welcome to the Studio Ghibli Pseudo-wiki!</h1>
                    <h4 className="text-white mt-3">Use the tabs above to explore!</h4>
                </div>
            </div>
        )
    }
}

export default Home;