import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Error, Spinner } from 'components/index';
import { Button, FormGroup, Input, Label, RegisterForm, Title } from './styles';
import { useRegistrationMutation } from 'store/api/api';

type TForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const [customError, setCustomError] = useState<string | null>(null);

  const navigate = useNavigate();

  const [
    registration,
    { isLoading: mutationLoading, isError, isSuccess, error },
  ] = useRegistrationMutation();

  const { register, handleSubmit } = useForm<TForm>();
  const submitForm: SubmitHandler<TForm> = (data) => {
    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch' as string);
      return;
    }

    if (data.password.length < 8) {
      setCustomError('Password should be at least 8 characters');
      return;
    }

    setCustomError(null);

    registration(data);
  };

  useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [navigate, isSuccess]);

  return (
    <RegisterForm onSubmit={handleSubmit(submitForm)}>
      <Title>Регистрация</Title>
      <FormGroup>
        <Label htmlFor='username'>Username</Label>
        <Input type='text' {...register('username')} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input type='text' {...register('password')} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input type='text' {...register('confirmPassword')} required />
      </FormGroup>
      {isError && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <Button type='submit' disabled={mutationLoading}>
        {mutationLoading ? <Spinner /> : 'Register'}
      </Button>
    </RegisterForm>
  );
};

export default Registration;
