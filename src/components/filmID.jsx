import React, { Component } from 'react';

class FilmID extends Component {

    state = {
        film: this.props.match.id,
        info: null
    }

    componentDidMount = () => {
        let currentFilm;
        let filmInfo;
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                currentFilm = obj[this.state.film];
                filmInfo = (
                    <div className="card col m-2 shadow border rounded">
                        <div className="card-body">
                            <h4 className="card-title">{currentFilm.title}</h4>
                            <h6 className="card-subtitle m-2 text-muted">{currentFilm.release_date}</h6>
                            <p className="card-text">{currentFilm.description}</p>
                            <p className="card-text">Director: {currentFilm.director}</p>
                            <p className="card-text">Producer: {currentFilm.producer}</p>
                            <p className="card-text">RT Score: {currentFilm.rt_score}</p>
                        </div>
                    </div>
                )                    
            }).catch(err => console.log(err));
        this.setState({ info: filmInfo });
    }

    render() {return(<> {this.state.info} </>)}

}

export default FilmID;