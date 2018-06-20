import * as CommentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comment => ({
  type: RECEIVE_COMMENTS,
  comments
})
