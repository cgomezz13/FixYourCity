import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

export class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.getMap(position.coords.latitude, position.coords.longitude)});
    };

    render() {

    }
}

export default withRouter(MainPage);
