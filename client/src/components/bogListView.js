
import React, { Component } from 'react'
import axios from 'axios'

import BogViewItem from './bogListItem.js';


export default class BogListView extends Component {
    // initial state of component is empty array
    //   fill bogList with data from backend node server

    state = {
        bogList: [],
        newBogName: '',
    }

    componentDidMount() {
        // get all bogs and update state 'bogList' with results
        //    route for get all bogs is '/api/bog'
        this.refreshBogs()
    }

    refreshBogs = () => {
        return axios.get('/api/bog')
            .then((response) => {
                console.log(response.data)
                // this.setState({
                //     bogList: response.data
                // })
            })
    }

  

    createNewBog = () => {
        const newBog = {
            name: this.state.newBogName,
        };
        axios.post('/api/bog', newBog)
            .then(() => {
                this.refreshBogs()
            })

        // create new Bog using 'newBogName' in state
        //    route for creation is '/api/Bog'
        //    refresh page to see results
    }


    onBogDeleteClick = (bogId) => {
        const url = '/api/bog/' + bogId
        axios.delete(url)
            .then(() => {
                this.refreshBogs()
            })
    }

    onNewBogeNameChange = (event) => {
        const newBogName = event.target.value;
        this.setState({ newBogName: newBogName })
    }





    render() {
        const bogListElements = this.state.bogList.map((bog) => {
            return (
                <BogViewItem
                    bogId={bog._id}
                    onBogDeleteClick={this.onBogDeleteClick}
                    name={bog.name}
                    description={bog.description}
                     />)
        })
        return (
            <div className="bog-list-container">
                <img className="hero-image" src="/hero.jpg" />
                <div className="header">Bog list</div>

                <input
                    type="string"
                    name="newBogName"
                    placeholder="Bog Name"
                    required="required"
                    onChange={this.onNewBogeNameChange}
                    value={this.state.newBogName} />
                <button
                    onClick={() => this.createNewBog()}>Create Bog</button>

                {bogListElements}

            </div>)
    }
}