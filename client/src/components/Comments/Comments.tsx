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
} from 'store/api/authApi';
import { useSelector } from 'hooks/useSelector';
import { TPhoto } from 'types/app';

type TProps = {
  data: TPhoto | null;
};

type TFormComment = {
  commentText: string;
};

const Comments = ({ data }: TProps) => {
  const user = useSelector((state) => state.auth.currentUser);
  const [addNewComment] = useAddNewCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const { register, handleSubmit, reset } = useForm<TFormComment>();
  const handleFormSubmit = ({ commentText }: TFormComment) => {
    addNewComment({ user, photoId: data?._id, commentText });
    reset();
  };

  const handleBtnDeleteClick = (commentId: string) => () =>
    deleteComment(commentId);

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
