import { Component, createContext, createSignal } from "solid-js";

import "./App.css";

import { User, Comment as CommentType } from "./types";

import api from "./api";

import CommentTree from "./components/commentTree";

import { state, setState } from "./store";

interface ContextProps {
  user: User;
  comments: CommentType[];
}

export const Context = createContext<ContextProps>();

interface Props {
  user: User;
  comments: CommentType[];
}

const App: Component<Props> = (props) => {
  const [getUser, setUser] = createSignal<User>(api.user());
  const [getComments, setComments] = createSignal<CommentType[]>(api.fetch());

  setState((state) => ({
    user: getUser(),
    comments: getComments(),
    isEditing: state.isEditing,
    api: api,
  }));

  return (
    <div className="appContainer">
      <CommentTree comments={state.comments} />
    </div>
  );
};

export default App;
