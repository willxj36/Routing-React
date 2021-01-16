import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/home';
import Films from './components/films';
import People from './components/people';

class App extends Component {


    render() {
        return(
            <>
                <div className="jumbotron jumbotron-fluid bg-dark">
                    <div className="container">
                        <h1 className="display-4 text-white">Studio Ghibli Film Pseudo-wiki</h1>
                    </div>
                </div>
                <div className="container bg-light">
                    <img className="m-4" src="logo.png" alt="Studio Ghibli logo"/>
                    <div className="col m-4">
                        <Router>
                            <div className="row justify-content-around">
                                <Link to="/" className="btn btn-lg px-3 btn-dark">Go Home</Link>
                                <Link to="/films" className="btn btn-lg px-3 btn-danger">View Films</Link>
                                <Link to="/people" className="btn btn-lg px-3 btn-warning">View People</Link>
                            </div>
                            <div className="row mt-5">
                                <Switch>
                                    <Route exact path="/" component={Home}></Route>
                                    <Route exact path="/films" component={Films}></Route>
                                    <Route exact path="/people" component={People}></Route>
                                </Switch>
                            </div>
                        </Router>
                    </div>
                </div>
            </>
        )
    }
}

export default App;