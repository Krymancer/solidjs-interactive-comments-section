import { Component, createSignal, Show, useContext } from "solid-js";

import Modal from "../modal";

import { User, Comment as CommentType } from "../../types";

import "./styles.css";

interface Props {
  user: User;
  commentId: number;
}

import { state, setState } from "../../store";

const REPLY_ICON_SRC = "./src/assets/icon-reply.svg";
const EDIT_ICON_SRC = "./src/assets/icon-edit.svg";
const DELETE_ICON_SRC = "./src/assets/icon-delete.svg";

const CommentActions: Component<Props> = (props) => {
  const [getModalState, setModalState] = createSignal<boolean>(false);

  const handleDeleteClick = () => {
    setModalState(true);
  };

  const handleEditClick = () => {
    console.log("state", state.isEditing);
    setState("isEditing", props.commentId);
  };

  const handleReplyClick = () => {
    console.log("reply");

    const oldComments = state.comments;
    const currentComment = oldComments.find(
      (comment) => comment.id === props.commentId
    );

    const reply = {
      id: Date.now(),
      content: "",
      score: 0,
      createdAt: "Just now",
      replyingTo: currentComment?.user.username || "Jonny Test",
      user: {
        username: state.user?.username || "Jonny Test",
        image: {
          png: state.user?.image.png || "",
          webp: "",
        },
      },
    };

    const newComments = oldComments.map((comment) => {
      if (comment.id === props.commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      } else {
        return comment;
      }
    });

    setState("comments", newComments);
    setState("isEditing", reply.id);
  };

  return (
    <>
      <Show when={props.user.username !== state.user?.username}>
        <div class="comment-actions-container">
          <div class="coment-action-item" onClick={handleReplyClick}>
            <img src={REPLY_ICON_SRC} alt="reply comment" />
            Reply
          </div>
        </div>
      </Show>

      <Show when={props.user.username === state.user?.username}>
        <div class="comment-actions-container">
          <Show when={getModalState()} fallback={null}>
            <Modal onClose={() => setModalState(false)} />
          </Show>
          <div
            class="coment-action-item comment-delete"
            onclick={handleDeleteClick}
          >
            <img src={DELETE_ICON_SRC} alt="delete comment" />
            Delete
          </div>
          <div class="coment-action-item" onclick={handleEditClick}>
            <img src={EDIT_ICON_SRC} alt="edit comment" />
            Edit
          </div>
        </div>
      </Show>
    </>
  );
};

export default CommentActions;
