import { Component, Match, Switch } from "solid-js";

import "./styles.css";

interface Props {
  write?: boolean;
  edit?: boolean;
  reply?: boolean;
  danger?: boolean;
  cancel?: boolean;
  onClick?: () => boolean | void;
}

const CommentButton: Component<Props> = (props) => {
  return (
    <Switch fallback={null}>
      <Match when={props.write}>
        <button class="comment-button" onClick={props.onClick}>
          Send
        </button>
      </Match>
      <Match when={props.edit}>
        <button class="comment-button" onClick={props.onClick}>
          Update
        </button>
      </Match>
      <Match when={props.reply}>
        <button class="comment-button" onClick={props.onClick}>
          Reply
        </button>
      </Match>
      <Match when={props.danger}>
        <button class="comment-button danger" onClick={props.onClick}>
          Yes, Delete
        </button>
      </Match>
      <Match when={props.cancel}>
        <button class="comment-button cancel" onClick={props.onClick}>
          No, Cancel
        </button>
      </Match>
    </Switch>
  );
};

export default CommentButton;
