import Navbar from 'components/Navbar/Navbar';
import { LoyautStyled, MainStyled } from './styles';
import { Outlet } from 'react-router-dom';

const Loyaut = () => {
  return (
    <LoyautStyled>
      <Navbar />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </LoyautStyled>
  );
};

export default Loyaut;
