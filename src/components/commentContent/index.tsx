import { Component, createSignal, Match, Switch } from "solid-js";
import { setState } from "../../store";
import CommentButton from "../commentButton";

import "./styles.css";

interface Props {
  write?: boolean;
  edit?: boolean;
  reply?: boolean;
  content?: string;
  onChange?: (e: Event) => void;
}

const CommentContent: Component<Props> = (props) => {
  const handleUpdateComment = () => {
    setState("isEditing", -1);
  };

  return (
    <Switch fallback={<div class="comment-content">{props.content}</div>}>
      <Match when={props.write}>
        <textarea
          class="comment-content-textarea"
          placeholder="Add a comment..."
          rows={3}
          onChange={props.onChange}
          value={props.content}
        />
      </Match>
      <Match when={props.edit}>
        <textarea
          class="comment-content-textarea"
          placeholder="Add a comment..."
          rows={3}
          value={props.content}
          onChange={props.onChange}
        />
        <div class="reply-comment-button">
          <CommentButton edit onClick={handleUpdateComment} />
        </div>
      </Match>
      <Match when={props.content}>
        <div class="comment-content">{props.content}</div>
      </Match>
    </Switch>
  );
};

export default CommentContent;
