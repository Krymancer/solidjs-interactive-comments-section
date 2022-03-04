import { Component, createSignal } from "solid-js";

import "./styles.css";

import CommentContainer from "../commentContainer";
import CommentContent from "../commentContent";
import CommentButton from "../commentButton";

import { state, setState } from "../../store";

const AvatarImage: Component<{ userImage: string | undefined }> = ({
  userImage,
}) => {
  return <img src={userImage} class="comment-write-avatar" />;
};

const CommentWrite: Component = () => {
  const [content, setContent] = createSignal<string>("");

  const handleContent = (e: Event) => {
    setContent((e.target as HTMLTextAreaElement).value);
  };

  const submitComment = () => {
    console.log("Submit comment");
    const comment = {
      user: {
        username: state.user?.username || "Jonny Test",
        image: {
          png: state.user?.image.png || "",
          webp: "",
        },
      },
      createdAt: "Just now",
      score: 0,
      id: Date.now(),
      content: content(),
      replies: [],
    };

    setState("comments", [...state.comments, comment]);
    setContent("");
  };

  return (
    <div>
      <CommentContainer>
        <AvatarImage userImage={state.user?.image.png} />
        <CommentContent write onChange={handleContent} content={content()} />
        <CommentButton write onClick={submitComment} />
      </CommentContainer>
    </div>
  );
};

export default CommentWrite;
