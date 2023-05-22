import styled from 'styled-components';
export const Hero = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-end;
  height: 358px;
  margin-bottom: calc(110px + 84px);
  @media only screen and (max-width: 1110px) {
    max-width: 768px;
    margin-inline: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    justify-items: center;
    margin-bottom: calc(64px + 84px);
  }
`;
export const ImageLeft = styled.img`
  margin-left: -32px;
  align-self: flex-start;
  @media only screen and (max-width: 1110px) {
    order: 1;
    align-self: auto;
  }
  @media only screen and (max-width: 768px) {
    margin-left: -28px;
  }
`;
export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  text-align: center;
  max-width: 540px;
  @media only screen and (max-width: 1110px) {
    margin-top: 72px;
    order: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 457px;
  }
`;
export const ImageRight = styled.img`
  margin-right: -32px;
  align-self: flex-end;
  margin-left: auto;
  @media only screen and (max-width: 1110px) {
    order: 2;
  }
  @media only screen and (max-width: 768px) {
    margin-right: -20px;
  }
`;
export const HeroHeading = styled.h1`
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;
  color: #28283D;
  margin-bottom: 34px;
  @media only screen and (max-width: 1110px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 24px
  }
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;
export const HeroParagraph = styled.p`
  color: #87879D;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 32px;
  @media only screen and (max-width: 1110px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 327px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
  }
`;
