import { Component, For } from "solid-js";

import "./styles.css";

import { Comment as CommentType } from "../../types";

import Comment from "../comment";
import CommentWrite from "../commentWrite";

interface Props {
  comments: readonly CommentType[];
}

const CommentTree: Component<Props> = (props) => {
  return (
    <div class="comment-tree-container">
      <For each={props.comments} fallback={<div>Loading...</div>}>
        {(comment) => <Comment comment={comment} />}
      </For>
      <CommentWrite />
    </div>
  );
};

export default CommentTree;
