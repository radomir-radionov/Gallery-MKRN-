import styled from 'styled-components';

export const LightBoxStyled = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
`;

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 850px;
  padding: 20px;
  transform: translate(-50%, -50%) scale(0.9);
  background: #fff;
  border-radius: 6px;
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
  max-height: 65vh;
  max-width: 90vh;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
