import styled from 'styled-components';

export const LightBoxStyled = styled.article`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  max-width: 650px;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  background-color: #fefefe;

  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button``;

export const PreviewImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const ImgBox = styled.div`
  max-width: 90vh;
  max-height: 65vh;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
