import { useForm } from 'react-hook-form';
import {
  CommentsList,
  Comment,
  Name,
  CommentsStyled,
  Text,
  FormComment,
  Button,
  Input,
} from './styles';
import {
  useAddNewCommentMutation,
  useDeleteCommentMutation,
  useGetPhotosQuery,
} from 'store/api/api';
import { useSelector } from 'hooks/useSelector';
import { TPhoto } from 'types/app';
import { useEffect } from 'react';

type TProps = {
  data: TPhoto;
};

type TFormComment = {
  commentText: string;
};

const Comments = ({ data }: TProps) => {
  const user = useSelector((state) => state.app.currentUser);
  const getPhotos = useGetPhotosQuery();
  const [addNewComment] = useAddNewCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const { register, handleSubmit, reset } = useForm<TFormComment>();

  const handleFormSubmit = ({ commentText }: TFormComment) => {
    addNewComment({ user, photoId: data._id, commentText });
    reset();
  };

  const handleBtnDeleteClick = (commentId: string) => () => {
    deleteComment(commentId);
  };

  useEffect(() => {
    getPhotos;
  }, [getPhotos]);

  return (
    <CommentsStyled>
      <h2>Comments</h2>
      <FormComment onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type='text'
          placeholder='Введите комментарий'
          {...register('commentText', { required: 'Comment is required' })}
        />
        <Button type='submit'>Добавить комментарий</Button>
      </FormComment>
      <CommentsList>
        {data?.comments.map(({ _id, userId, username, commentText }) => (
          <Comment key={_id}>
            <Name>{username}</Name>
            <Text>{commentText}</Text>
            {userId === user.id && (
              <Button onClick={handleBtnDeleteClick(_id)}>Удалить</Button>
            )}
          </Comment>
        ))}
      </CommentsList>
    </CommentsStyled>
  );
};

export default Comments;
