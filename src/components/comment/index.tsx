import { Component, For } from "solid-js";

import Score from "../score";
import CommentContainer from "../commentContainer";
import CommentHeader from "../commentHeader";
import CommentContent from "../commentContent";

import { Comment as CommentType } from "../../types";
import CommentReply from "../commentReply";

interface Props {
  comment: CommentType;
}

import { state, setState } from "../../store";

const Comment: Component<Props> = (props) => {
  const handleUpdate = (e: Event) => {
    console.log((e.target as HTMLTextAreaElement).value);
    const oldComments = state.comments;
    const newComments = oldComments.map((comment) => {
      if (comment.id === props.comment.id) {
        return {
          ...comment,
          content: (e.target as HTMLTextAreaElement).value,
        };
      } else {
        return comment;
      }
    });
    setState("comments", newComments);
    setState("isEditing", -1);
    console.log("update comment");
  };

  return (
    <div>
      <CommentContainer>
        <Score score={props.comment.score} />
        <div style="width: 100%">
          <CommentHeader
            commentId={props.comment.id}
            createdAt={props.comment.createdAt}
            user={props.comment.user}
          />
          <CommentContent
            content={props.comment.content}
            edit={state.isEditing === props.comment.id}
            onChange={handleUpdate}
          />
        </div>
      </CommentContainer>
      <For each={props.comment.replies} fallback={null}>
        {(reply) => <CommentReply reply={reply} comment={props.comment} />}
      </For>
    </div>
  );
};

export default Comment;
