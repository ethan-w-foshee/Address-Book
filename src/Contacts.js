import { Component } from "react";
import axios from 'axios';
import MoreInfo from "./MoreInfo";

const url = 'https://randomuser.me/api?results=25'

class Contacts extends Component {
    state = {
        contactList: []
    }

    componentDidMount() {
        axios.get(`${url}`)
        .then(res => {
            const contactList = res.data.results;
            this.setState({contactList})
        })
    }

    render() {
        return(
            <ul className="Contacts">
                {this.state.contactList.map(person =>
                    <li>
                        <h1>{person.name.first} {person.name.last}</h1>
                        <img src={person.picture.medium} alt={person.name.first}></img>
                        <MoreInfo {...person} />
                    </li>)}
            </ul>
        )
    }
}

export default Contacts;