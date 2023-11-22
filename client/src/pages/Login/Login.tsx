import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, LoginForm, Label, Button, Title } from './styles';
import { useSelector } from 'hooks/useSelector';
import { useLoginMutation } from 'store/api/api';

type TForm = {
  username: string;
  password: string;
};

const Login = () => {
  const isAuth = useSelector((state) => state.app.isAuth);
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const { register, handleSubmit } = useForm<TForm>();
  const submitForm: SubmitHandler<TForm> = (data) => login(data);

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [navigate, isAuth]);

  return (
    <LoginForm onSubmit={handleSubmit(submitForm)}>
      <Title>Авторизация</Title>
      <FormGroup>
        <Label htmlFor='username'>Username</Label>
        <Input type='text' {...register('username')} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input type='text' {...register('password')} required />
      </FormGroup>
      <Button type='submit'>Login</Button>
    </LoginForm>
  );
};

export default Login;
