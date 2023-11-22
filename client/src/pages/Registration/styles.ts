import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 500px;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
  background-color: white;
`;

export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  background-color: #566885;
  color: white;
`;
