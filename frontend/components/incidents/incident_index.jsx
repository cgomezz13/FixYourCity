import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

export class IncidentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          errors: null
        }
    }

    componentDidMount () {
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     this.props.fetchIncidents({location: position.coords.latitude, position.coords.longitude)});
        this.props.fetchIncidents().then((incs) => {
          tomtom.L.marker([incs.incidents.lat, incs.incidents.lon], {
            draggable: true
          }).addTo(this.props.map)
        }, (err) => {
          this.setState({
            errors: err.responseText
          })
        })
    }

    render(){
        const { incidents } = this.props;
        let count = 0;
        const incidentIndexLinks = incidents.map(incident =>
            <div key={++count} className="incident-index-item">
              {this.state.errors && (
                <h3>{this.state.errors}</h3>
              )}
                <Link to={`/incidents/${incident.id}`}
                className='index-link'>
                {incident.name} at {incident.location}: {incident.description}
                </Link>
            </div>
        );

        return (
            <div>
                {null}
            </div>
        );
    }
}

export default withRouter(IncidentIndex);
