import * as S from './Hero.styles';
import { PrimaryButton, SecondaryButton, ButtonSpan } from '../../globalStyle';
export default function Hero() {
  return (
    <>
      <S.Hero>
        <S.ImageLeft
          src="./images/desktop/image-hero-left.png"
          alt="Multiple portraits of human beings"
        />
        <S.HeroText>
          <S.HeroHeading>
            Group Chat
            <br /> for Everyone
          </S.HeroHeading>
          <S.HeroParagraph>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </S.HeroParagraph>
          <S.ButtonContainer>
            <PrimaryButton>
              Download<ButtonSpan>v1.3</ButtonSpan>
            </PrimaryButton>
            <SecondaryButton>What is it?</SecondaryButton>
          </S.ButtonContainer>
        </S.HeroText>
        <S.ImageRight
          src="./images/desktop/image-hero-right.png"
          alt="Multiple portraits of human beings"
        />
      </S.Hero>
    </>
  );
}
