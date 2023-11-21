import styled from 'styled-components';

export const CommentsStyled = styled.div``;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #566885;
`;

export const Comment = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3``;

export const Text = styled.p``;

export const FormComment = styled.form``;

export const Input = styled.input`
  padding: 6px;
  border: none;
`;

export const Button = styled.button`
  width: fit-content;
`;
