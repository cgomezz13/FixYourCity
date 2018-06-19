export const createComment = (comment, incidentId) => {
  return $.ajax({
    method: "POST",
    url: `/api/incidents/${incidentId}/comments`,
    data: { comment: comment }
  });
};

export const deleteComment = (commentId, incidentId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/incidents/${incidentId}/comments/${commentId}`
  });
};
