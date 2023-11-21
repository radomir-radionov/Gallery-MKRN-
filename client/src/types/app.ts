export type TUser = {
  id: string;
  username: string;
};

export type TPhoto = {
  _id: string;
  url: string;
  comments: TComment[];
};

export type TComment = {
  _id: string;
  userId: string;
  username: string;
  commentText: string;
};
