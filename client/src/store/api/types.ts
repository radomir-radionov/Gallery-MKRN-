import { TUser } from 'types/app';

export type TTest = {
  username: string;
  password: string;
};

export type TGetRegistration = {
  username: string;
  password: string;
};

export type TPostLogin = {
  username: string;
  password: string;
};

export type TPostAddNewComment = {
  user: TUser;
  photoId: string;
  commentText: string;
};

export type TResRegistration = {
  message: string;
};
export type TResLogin = {
  token: string;
  user: TUser;
};

export type TResAuth = {
  token: string;
  user: TUser;
};

export type TResAddNewComment = {
  message: string;
};

export type TResDeleteComment = {
  message: string;
};
