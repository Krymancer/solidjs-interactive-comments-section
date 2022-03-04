import { Component } from "solid-js";

import "./styles.css";

const CommentContainer: Component = (props) => {
  return <div class="comment-container">{props.children}</div>;
};

export default CommentContainer;
