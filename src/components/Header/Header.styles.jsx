import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 60px;
  @media only screen and (max-width: 1110px) {
    padding-top: 48px;
    padding-bottom: 64px;    
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 54px;    
  }
`;
