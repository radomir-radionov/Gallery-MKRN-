import { Comments } from 'components';
import {
  LightBoxStyled,
  Container,
  Header,
  Button,
  PreviewImg,
  ImgBox,
  Img,
} from './styles';
import { TPhoto } from 'types/app';

type TProps = {
  photo: TPhoto | null;
  onClose: () => void;
};

const LightBox = ({ photo, onClose }: TProps) => {
  return (
    <LightBoxStyled>
      <Container>
        <Header>
          <Button onClick={onClose}>Close</Button>
        </Header>
        <PreviewImg>
          <ImgBox>
            <Img src={photo?.url} alt='photo' />
          </ImgBox>
        </PreviewImg>
        <Comments data={photo} />
      </Container>
    </LightBoxStyled>
  );
};

export default LightBox;
