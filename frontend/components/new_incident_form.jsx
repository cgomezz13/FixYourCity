import React, { Component } from 'react';

export default class NewIncidentForm extends Component {
  constructor() {
    super()
    this.state = {
      errors: null,
      newIncident: {
        name: '',
        location: '',
        description: '',
        photo: null
      },
      img_url: null
    }
    this.submitIncident = this.submitIncident.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newIncident = Object.assign({}, this.state.newIncident)
      const position = pos;
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      newIncident.location = {lat: lat, lon: lon};
      this.setState({
        newIncident: newIncident
      })
    })
  }

  submitIncident(e) {
    e.preventDefault();
    let formData = new FormData();
    if (this.state.newIncident.photo) {
      formData.append('incident[photo]', this.state.newIncident.photo)
    }
    formData.append('incident[name]', this.state.newIncident.name);
    formData.append('incident[location]', this.state.newIncident.location);
    formData.append('incident[description]', this.state.newIncident.description);
    // // const newIncident = Object.assign({}, this.state.newIncident)
    // if (newIncident.photo === null) {
    //   delete newIncident.photo;
    // }
    this.props.createIncident(formData)
      .then(null, (err) => {
        this.setState({
          errors: err.responseText
        })
      })
  }

  updateField(field, value) {
    const newState = Object.assign({}, this.state.newIncident);
    newState[field] = value
    this.setState({newIncident: newState})
  }

  updateDescription(e) {
    this.updateField('description', e.target.value);
  }

  updateLocation(e) {
    this.updateField('location', e.target.value);
  }

  updateName(e) {
    this.updateField('name', e.target.value);
  }

  updatePhoto(e) {
    const photo = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const newIncident = Object.assign({}, this.state.newIncident)
    newIncident.photo = photo

    fileReader.onloadend = () => {
      this.setState({
        newIncident: newIncident,
        img_url: fileReader.result
      })
    }
    if (photo) {
      fileReader.readAsDataURL(photo);
    }
  }

  render() {
    return (
      <form className="new-incident-form" onSubmit={this.submitIncident}>
        <h1>New Incident Form</h1>
        { this.state.errors && (
          <h2 style={{color: '#f00'}}>{this.state.errors}</h2>
        )}
          <label>Post Title<br />
          <input
            type="text"
            placeholder="give a descriptive title"
            onChange={this.updateName}
            value={this.state.name}
            />
        </label><br />
        <label>Description<br/>
          <textarea
            placeholder="give a concise description"
            onChange={this.updateDescription}
            value={this.state.description}
            />
        </label><br />
        <label>Take Photo<br />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={this.updatePhoto}
            />
        </label><br />
        <label>Upload Photo<br />
          <input
            type="file"
            accept="image/*"
            onChange={this.updatePhoto}
            />
        </label><br />
        {
          this.state.img_url && (
            <img src={this.state.img_url} className="image-preview" />
          )
        }
        <input type="submit" value="Submit Incident" />
      </form>
    )
  }
}
