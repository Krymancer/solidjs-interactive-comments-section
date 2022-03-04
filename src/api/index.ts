import { User, Comment, Reply } from "../types";
import data from "./data.json";

function fetchUser(): User {
  return data.currentUser;
}

function fetchComments(): Comment[] {
  return data.comments;
}

function replyComment(id: number, reply: Reply) {
  const comment = data.comments.find((c) => c.id === id);
  if (comment) {
    comment.replies.push(reply);
  }
}

function editComent(id: number, content: string) {
  const comment = data.comments.find((c) => c.id === id);
  if (comment) {
    comment.content = content;
  }
}

function deleteComment(id: number) {
  const comment = data.comments.find((c) => c.id === id);
  if (comment) {
    data.comments = data.comments.filter((c) => c.id !== id);
  }
}

function addComment(comment: Comment) {
  data.comments.push({ ...comment, replies: [] });
}

const api = {
  user: fetchUser,
  add: addComment,
  fetch: fetchComments,
  reply: replyComment,
  edit: editComent,
  delete: deleteComment,
};

export default api;
