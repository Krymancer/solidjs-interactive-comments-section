import { createStore } from "solid-js/store";
import { User, Comment, Reply } from "../types";

interface StoreProps {
  user?: User;
  comments: Comment[];
  isEditing: number;
  api?: {
    user: () => User;
    add: (comment: Comment) => void;
    fetch: () => Comment[];
    reply: (id: number, reply: Reply) => void;
    edit: (id: number, content: string) => void;
    delete: (id: number) => void;
  };
}

const initialValue: StoreProps = {
  comments: [],
  isEditing: -1,
};

const [state, setState] = createStore(initialValue);

export { state, setState };
