import styled from 'styled-components';
export const SectionIndicator = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;
  &:before {
    content: "";
    height: 84px;
    width: 1px;
    background-color: #87879D;
    mix-blend-mode: normal;
    opacity: 0.25;
    position: absolute;
    top: -8.4rem; 
  }
`;
export const SectionIndicatorText = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #87879D;
  background: #FAFAFA;
  border: 1px solid rgba(135, 135, 157, 0.25);
  border-radius: 29px;
  display: flex;
  flex-direction: column;
  padding-block: 15px;
  padding-inline: 19px;
`;
