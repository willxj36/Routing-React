import React, { Component } from 'react';

class PersonID extends Component {

    state = {
        person: this.props.match.params.id,
        info: null
    }

    componentDidMount = () => {
        let currentPerson;
        let personInfo;
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => {
                currentPerson = obj[this.state.person];
                personInfo = (
                    <div className="card col m-2 shadow border rounded">
                        <div className="card-body">
                            <h4 className="card-title">{currentPerson.name}</h4>
                            <p className="card-text">Age: {currentPerson.age}</p>
                            <p className="card-text">Gender: {currentPerson.gender}</p>
                            <p className="card-text">Eye Color: {currentPerson.eye_color}</p>
                            <p className="card-text">Hair Color: {currentPerson.hair_color}</p>
                        </div>
                    </div>
                )                    
                this.setState({ info: personInfo });
            }).catch(err => console.log(err));
    }

    render() {return(<> {this.state.info} </>)}

}

export default PersonID;