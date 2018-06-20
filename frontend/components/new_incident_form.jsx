import React, { Component } from 'react';

export default class NewIncidentForm extends Component {
  constructor() {
    super()
    this.state = {
      newIncident: {
        name: '',
        location: '',
        description: '',
        photo: null,
        img_url: null
      }
    }
    this.submitIncident = this.submitIncident.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  submitIncident(e) {
    e.preventDefault();
    const newIncident = Object.assign({}, this.state.newIncident)
    if (newIncident.photo === null) {
      delete newIncident.photo;
    }
    this.props.createIncident({incident: newIncident})
  }

  updateField(field, value) {
    const newState = Object.assign({}, this.state);
    newState[field] = value
    this.setState(newState)
  }

  updateDescription(e) {
    updateField('description', e.target.value);
  }

  updateLocation(e) {
    updateField('location', e.target.value);
  }

  updateName(e) {
    updateField('name', e.target.value);
  }

  updatePhoto(e) {
    const photo = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photo: photo,
        img_url: fileReader.result
      })
    }
    if (photo) {
      fileReader.readAsDataURL(photo);
    }
  }

  render() {
    <form className="new-incident-form" onSubmit={this.submitIncident}>
      <label>Post Title
        <input
          type="text"
          placeholder="please input a descriptive title"
          onChange={this.updateName}
          value={this.state.name}
          />
      </label>
      <label>Description
        <textarea
          placeholder="please input a concise description of the incident"
          value={this.state.description}
          onChange={this.updateDescription}
          />
      </label>
      <label>Take Photo
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={this.uploadPhoto}
          />
      </label>
      <label>Upload Photo
        <input
          type="file"
          accept="image/*"
          />
      </label>
      {
        this.state.img_url && (
          <img src={this.state.img_url} className="image-preview" />
        )
      }
      <input type="submit" value="Submit Incident" />
    </form>
  }
}
