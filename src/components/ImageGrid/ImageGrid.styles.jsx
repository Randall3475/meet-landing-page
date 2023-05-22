import styled from 'styled-components';
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 242px);
  justify-content: center;
  column-gap: 30px;
  margin-top: 64px;
  @media only screen and (max-width: 1110px) {
    grid-template-columns: repeat(4, 164px);
    column-gap: 11px;
    margin-top: 67px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 154px);
    column-gap: 25px;
    row-gap: 24px;
  }
`;
export const GridImage = styled.img`
  border-radius: 8px;
`;
