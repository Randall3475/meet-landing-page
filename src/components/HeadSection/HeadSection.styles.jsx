import styled from 'styled-components';
export const SectionContainer = styled.section`
  text-align: center;
  margin-inline: auto;
  max-width: 540px;
  margin-top: 64px;
  margin-bottom: calc(72px + 84px);
  @media only screen and (max-width: 1110px) {
    max-width: 573px;
    margin-top: 46px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 327px;
  }
`;
export const SectionPre = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #4D96A9;
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
    }
`;
export const SectionHeading = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: #28283D;
  margin-bottom: 32px;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;
export const SectionParagraph = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #87879D;
  @media only screen and (max-width: 1110px) {
    font-size: 16px;
  }
`;
export const SectionBreaker = styled.br`
@media only screen and (max-width: 768px) {
  display: none;
  }
`;
