import styled from 'styled-components';

export const GalleryStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photos = styled.ul`
  gap: 15px;
  margin-top: 40px;
  padding: 0 20px;
  columns: 4 240px;
  list-style: none;
`;

export const Photo = styled.li`
  display: flex;
  margin-bottom: 14px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 14px;
`;
