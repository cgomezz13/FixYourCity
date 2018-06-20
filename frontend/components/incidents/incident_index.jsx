import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

export class IncidentIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.fetchIncidents({location: position.coords.latitude, position.coords.longitude)});
    }

    render(){
        const { incidents } = this.props;
        const incidentIndexLinks = incidents.map(incident =>
            <div className="incident-index-item">
                <Link to={`/incidents/${incident.id}`}
                className='index-link'>
                {incident.name} at {incident.location}: {incident.description}
                </Link>
            <div>
        );

        return (
            <div>
                {incidentIndexLinks}
            </div>
        );
    }
}

export default withRouter(IncidentIndex);
