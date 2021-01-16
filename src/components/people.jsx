import React, { Component } from 'react';
import PersonID from './personID';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class People extends Component {

    state = { peopleArray: [] };

    componentDidMount() {
        let array;
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => {
            array = obj.map((person, index) => {
                return(
                    <div className="card col-md-5 m-2 shadow border rounded" key={person.id}>
                        <div className="card-body">
                            <h4 className="card-title">{person.name}</h4>
                            <h6 className="card-subtitle m-2 text-muted">{person.gender}</h6>
                            <h6 className="card-subtitle m-2 text-muted">{person.age}</h6>
                            <Link to={`/people/${index}`} className="btn btn-dark m-2">Info on {person.name}</Link>
                        </div>
                    </div>
                )
            })
            this.setState({ peopleArray: [...array] });
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div className="row">
                        <Link to="/people" className="btn btn-dark">People Home</Link>
                    </div>
                    <div className="row">
                        <Switch>
                            <Route exact path="/people">{this.state.peopleArray}</Route>
                            <Route exact path="/people/:id" component={PersonID}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default People;