import React, { Component } from 'react';
import FilmID from './filmID';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class Films extends Component {

    state = { filmArray: [] };

    componentDidMount() {
        let newFilm;
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                newFilm = obj.map((film, index) => {
                    return (
                        <div className="card col-md-5 m-2 shadow border rounded" key={film.id}>
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <h6 className="card-subtitle m-2 text-muted">{film.release_date}</h6>
                                <p className="card-text">{film.description}</p>
                                <Link to={`/films/${index}`} className="btn btn-dark m-2">Info on {film.title}</Link>
                            </div>
                        </div>
                    )
                })
                this.setState({ filmArray: [...newFilm] });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div className="row">
                        <Link to="/films" className="btn btn-dark">Films Home</Link>
                    </div>
                    <div className="row">
                        <Switch>
                            <Route exact path="/films">{this.state.filmArray}</Route>
                            <Route exact path="/films/:id" component={FilmID}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

}

export default Films;