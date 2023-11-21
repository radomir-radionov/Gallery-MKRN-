import { SpinnerCircle, SpinnerStyled } from './style';

const Spinner = () => {
  return (
    <SpinnerStyled aria-label='spinner-icon'>
      <SpinnerCircle></SpinnerCircle>
    </SpinnerStyled>
  );
};

export default Spinner;
