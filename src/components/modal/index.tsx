import { Component, createSignal } from "solid-js";

import "./styles.css";

import CommentButton from "../commentButton";

interface Props {
  onClose: () => boolean;
}

const Modal: Component<Props> = (props) => {
  return (
    <div class="modal-container">
      <div class="modal-content">
        <div class="modal-header">Delete Comment</div>
        <div class="modal-body">
          <div>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </div>
          <div class="modal-buttons">
            <CommentButton cancel onClick={props.onClose} />
            <CommentButton danger onClick={props.onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
