import * as S from './CTASection.styles';
import { SecondaryButton, ButtonSpan } from '../../globalStyle';
export default function CTASection() {
  return (
    <>
      <S.CTA>
        <S.CTAContainer>
          <S.CTAHeading>Experience more together</S.CTAHeading>
          <S.CTAPharagraph>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </S.CTAPharagraph>
          <S.CTAButtonContainer>
            <SecondaryButton>
              Download<ButtonSpan type="secondary">v1.3</ButtonSpan>
            </SecondaryButton>
          </S.CTAButtonContainer>
        </S.CTAContainer>
      </S.CTA>
    </>
  );
}
