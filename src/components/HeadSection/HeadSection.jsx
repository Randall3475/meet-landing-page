import * as S from './HeadSection.styles';
export default function HeadSection() {
  return (
    <>
      <S.SectionContainer>
        <S.SectionPre>Built for modern use</S.SectionPre>
        <S.SectionHeading>
          Smarter meetings, all <S.SectionBreaker /> in one place
        </S.SectionHeading>
        <S.SectionParagraph>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with <S.SectionBreaker />{' '}
          invite-only team access, data encryption, and data export.
        </S.SectionParagraph>
      </S.SectionContainer>
    </>
  );
}
