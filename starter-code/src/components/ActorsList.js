import React, { Component } from 'react';
import contacts from '../contacts.json';
import ActorCard from "./ActorCard";
import { Button } from "reactstrap";
import _ from "lodash";


class ActorsList extends Component {
    constructor() {
        super();
        this.state = { contacts: contacts.slice(0, 5),
                       fullContacts: contacts }
    }

    // firstFive() {
    //     return this.state.contacts.slice(0, 5);
    // }

    shuffle() {

        let shuffledContacts = [...this.state.fullContacts];

        for (let i = shuffledContacts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledContacts[i], shuffledContacts[j]] = [shuffledContacts[j], shuffledContacts[i]];
        }
        return shuffledContacts;
    }

    addRandomContact = (actorsIndex) => {
        let randomElement = this.shuffle()[0];
        const contactsCopy = [...this.state.contacts];
        contactsCopy.unshift(randomElement)
        this.setState({
            contacts: contactsCopy
        })
    }

    deleteActor = (actorIndex) => {
        const actorsCopy = [...this.state.contacts];
        actorsCopy.splice(actorIndex, 1);
        this.setState({
            contacts: actorsCopy
        })
    }

    sortByNameA = () => {
        let sortedByNameA = [...this.state.contacts];
        sortedByNameA = _.orderBy(sortedByNameA, "name", "asc");
        this.setState({
            contacts: sortedByNameA
        })
    }

    sortByNameD = () => {
        let sortedByNameD = [...this.state.contacts];
        sortedByNameD = _.orderBy(sortedByNameD, "name", "desc");
        this.setState({
            contacts: sortedByNameD
        })
    }

    sortByPopA = () => {
        let sortedByPopA = [...this.state.contacts];
        sortedByPopA = _.orderBy(sortedByPopA, "popularity", "asc");
        this.setState({
            contacts: sortedByPopA
        })
    }

    sortByPopD = () => {
        let sortedByPopD = [...this.state.contacts];
        sortedByPopD = _.orderBy(sortedByPopD, "popularity", "desc");
        this.setState({
            contacts: sortedByPopD
        })
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <Button className="ml-1" onClick={this.addRandomContact}>Add Random</Button>
                <Button className="ml-1" onClick={this.sortByNameA}>Sort by Name (A-Z)</Button>
                <Button className="ml-1" onClick={this.sortByNameD}>Sort by Name (Z-A)</Button>
                <Button className="ml-1" onClick={this.sortByPopA}>Sort by Popularity (Lowest first)</Button>
                <Button className="ml-1" onClick={this.sortByPopD}>Sort by Popularity (Highest first)</Button>

                {
                    this.state.contacts.map((oneActor, index) => {
                        return <ActorCard key={index} {...oneActor}
                            clickToDelete={() => this.deleteActor(index)}
                        />
                    }
                    )
                }
            </div>
        );
    }
}

export default ActorsList;