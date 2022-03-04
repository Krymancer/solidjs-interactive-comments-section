import { Component } from "solid-js";

import "./styles.css";

import { User, Comment as CommentType, Reply } from "../../types";

import { state } from "../../store";

import CommentActions from "../commentActions";

interface Props {
  createdAt: string;
  user: User;
  commentId: number;
}

const CommentHeader: Component<Props> = (props) => {
  const isUserComment = state.user?.username === props.user.username;

  return (
    <div class="comment-header-container">
      <div class="header-avatar-container">
        <img class="header-avatar-image" src={props.user.image.png} />
        <span>{props.user.username}</span>
        {isUserComment && <span class="header-author-mark">you</span>}
      </div>
      <span class="header-comment-date">{props.createdAt}</span>
      <CommentActions user={props.user} commentId={props.commentId} />
    </div>
  );
};

export default CommentHeader;
