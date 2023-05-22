import * as S from './ImageGrid.styles';
import SectionIndicator from '../../globalStyle';
export default function ImageGrid() {
  return (
    <>
      <S.ImageGrid>
        <SectionIndicator>1</SectionIndicator>
        <S.GridImage
          src="./images/desktop/image-woman-in-videocall.jpg"
          alt="Woman in videocall on an Apple laptop"
        />
        <S.GridImage
          src="./images/desktop/image-women-videochatting.jpg"
          alt="Women video chatting on an Apple smartphone"
        />
        <S.GridImage
          src="./images/desktop/image-men-in-meeting.jpg"
          alt="Men in a video meeting"
        />
        <S.GridImage
          src="./images/desktop/image-man-texting.jpg"
          alt="Man texting on an Apple smartphonen"
        />
      </S.ImageGrid>
    </>
  );
}
