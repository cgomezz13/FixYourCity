import React, { Component } from 'react'

export default class MapPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    tomtom.setProductInfo('fix-your-city', '1.0');
    const map = tomtom.map('map', {
      key: 'ZzhLoHMvN7NYtV6UorNZ3BAWwGDSgbfh',
      source: 'vector',
      basePath: '../../jssdk-4.29.0-distribution'
    });
    const languageLabel = L.DomUtil.create('label');
    languageLabel.innerHTML = 'Maps language';
    const languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'maps');
    languageLabel.appendChild(languageSelector);
    tomtom.controlPanel({
      position: 'bottomright',
      title: 'Settings',
      collapsed: true,
      closeOnMapClick: false
    })
      .addTo(map)
      .addContent(languageLabel);
  }

  render () {
    return (
      <div>

      </div>
    )
  }
}
