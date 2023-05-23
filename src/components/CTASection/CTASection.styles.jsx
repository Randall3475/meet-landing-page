import styled from 'styled-components';
export const CTA = styled.section`
  background-image: url('./images/desktop/image-footer.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 116px;
  padding-bottom: 104px;
  margin-top: -2.8rem;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    background-color: #4D96A9;
    mix-blend-mode: normal;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media only screen and (max-width: 1110px) {
    padding-top: 92px;
    padding-bottom: 66px;
  }
`;
export const CTAContainer = styled.div`
  max-width: 1110px;
  padding-inline: 24px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1110px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const CTAHeading = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #FAFAFA;
  max-width: 350px;
  @media only screen and (max-width: 1110px) {
    margin-bottom: 32px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 327px;
  }
`;
export const CTAPharagraph = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #FAFAFA;
  max-width: 350px;
  @media only screen and (max-width: 1110px) {
    max-width: 573px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 327px;
  }
`;
export const CTAButtonContainer = styled.div`
  display: flex;
  align-self: center;
`;
