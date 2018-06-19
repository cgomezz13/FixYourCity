import React, { Component } from 'react'

export default class MapPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    tomtom.setProductInfo('fix-your-city', '4.29.0');
    tomtom.L.map('map', {
        key: 'ZzhLoHMvN7NYtV6UorNZ3BAWwGDSgbfh'
    });
  }

  render () {
    return (
      <div
        id="map"
        className="use-all-space"
        style={{height: 260}}
        >
      </div>
    )
  }
}
