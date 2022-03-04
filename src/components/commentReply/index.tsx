import { Component } from "solid-js";

import "./styles.css";

import { Reply, Comment as CommentType } from "../../types";

import CommentContainer from "../commentContainer";
import CommentContent from "../commentContent";
import CommentHeader from "../commentHeader";
import Score from "../score";

interface Props {
  reply: Reply;
  comment: CommentType;
}

import { state, setState } from "../../store";

const CommentReply: Component<Props> = (props) => {
  const handleEditReply = (e: Event) => {
    const reply = {
      id: Date.now(),
      content: (e.target as HTMLTextAreaElement).value,
      score: props.reply.score,
      createdAt: "Just now",
      replyingTo: props.comment.user.username,
      user: {
        username: state.user?.username || "Jonny Test",
        image: {
          png: state.user?.image.png || "",
          webp: "",
        },
      },
    };

    // Remove old reply
    const oldReplies = state.comments.map((comment) => {
      if (comment.id === props.comment.id) {
        return {
          ...comment,
          replies: comment.replies.filter(
            (reply) => reply.id !== props.reply.id
          ),
        };
      } else {
        return comment;
      }
    });

    // Add new reply
    const newReplies = oldReplies.map((comment) => {
      if (comment.id === props.comment.id) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      } else {
        return comment;
      }
    });

    setState("comments", newReplies);
    setState("isEditing", -1);
    console.log("update comment");
  };

  return (
    <div class="comment-reply-container">
      <p class="comment-reply-before"></p>
      <CommentContainer>
        <Score score={props.reply.score} />
        <div class="reply-comment-container">
          <CommentHeader
            user={props.reply.user}
            createdAt={props.reply.createdAt}
            commentId={props.reply.id}
          />
          <CommentContent
            content={props.reply.content}
            edit={state.isEditing === props.reply.id}
            onChange={handleEditReply}
          />
        </div>
      </CommentContainer>
    </div>
  );
};

export default CommentReply;
