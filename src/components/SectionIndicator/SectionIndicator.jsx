import * as S from './SectionIndicator.styles';
export default function SectionIndicator({ number }) {
  return (
    <>
      <S.SectionIndicator>
        <S.SectionIndicatorText>{number}</S.SectionIndicatorText>
      </S.SectionIndicator>
    </>
  );
}
