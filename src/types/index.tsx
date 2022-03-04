export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

export interface Comment {
  user: User;
  createdAt: string;
  score: number;
  id: number;
  content: string;
  replies: readonly Reply[] | Reply[];
}
