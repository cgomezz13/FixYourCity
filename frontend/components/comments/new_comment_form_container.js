import { connect } from "react-redux";

import { createComment } from "../actions/comment_actions";

import NewCommentForm from "./new_comment_form";

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(null, mapDispatchToProps)(NewCommentForm);
