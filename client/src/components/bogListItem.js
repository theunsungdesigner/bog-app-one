import React, { Component } from 'react'
import axios from 'axios'


export default class BogListItem extends Component {

    render() {
        const {
            bogId,
            name,
            description,
            onBogDeleteClick
        } = this.props;

        return (
        <div className="bog-list-item" key={bogId}>
            <div className="title">{name || ''}</div>
            
            <i className="material-icons delete"
                onClick={()=> onBogDeleteClick(bogId)}>
                clear
            </i>
        </div>);
    }
}