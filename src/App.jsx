import GlobalStyle from './globalStyle';
import {
  Header,
  Hero,
  ImageGrid,
  SectionIndicator,
  HeadSection,
  CTASection,
} from './components';
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <SectionIndicator number="01" />
      <ImageGrid />
      <HeadSection />
      <SectionIndicator number="02" />
      <CTASection />
    </>
  );
}
