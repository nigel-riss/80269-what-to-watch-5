const parseComment = (comment) => ({
  date: comment.date,
  name: comment.user.name,
  rating: comment.rating,
  text: comment.comment,
});

const parseComments = (comments) => comments.map(parseComment);


export {parseComments};
