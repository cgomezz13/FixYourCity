import React, { Component } from "react";

export default class NewCommentForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: null,
      newComment: {
        title: "",
        body: "",
        image: null,
        img_url: null
      }
    };
    this.submitComment = this.submitComment.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  submitComment(e) {
    e.preventDefault();
    const newComment = Object.assign({}, this.state.newComment);
    if (newComment.image === null) {
      delete newComment.image;
    }
    this.props.createComment({ comment: newComment }).then(null, err => {
      this.setState({
        errors: err.responseText
      });
    });
  }

  updateField(field, value) {
    const newState = Object.assign({}, this.state.newComment);
    newState[field] = value;
    this.setState({ newComment: newState });
  }

  updateBody(e) {
    this.updateField("body", e.target.value);
  }

  updateTitle(e) {
    this.updateField("title", e.target.value);
  }

  updatePhoto(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: image,
        img_url: fileReader.result
      });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  render() {
    return (
      <form className="new-comment-form" onSubmit={this.submitComment}>
        <h1>New Comment Form</h1>
        {this.state.errors && (
          <h2 style={{ color: "#f00" }}>{this.state.errors}</h2>
        )}
        <label>
          Post Title<br />
          <input
            type="text"
            placeholder="give a descriptive title"
            onChange={this.updateTitle}
            value={this.state.title}
          />
        </label>
        <br />
        <label>
          Description<br />
          <textarea
            placeholder="give a concise description"
            onChange={this.updateBody}
            value={this.state.body}
          />
        </label>
        <br />
        <label>
          Take Photo<br />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={this.updatePhoto}
          />
        </label>
        <br />
        <label>
          Upload Photo<br />
          <input type="file" accept="image/*" onChange={this.updatePhoto} />
        </label>
        <br />
        {this.state.img_url && (
          <img src={this.state.img_url} className="image-preview" />
        )}
        <input type="submit" value="Submit Comment" />
      </form>
    );
  }
}
