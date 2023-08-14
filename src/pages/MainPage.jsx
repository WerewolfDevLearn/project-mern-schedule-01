import AuthSection from 'src/components/MainPage/AuthSection/AuthSection';
import MPDescription from 'src/components/MainPage/MPDescription/MPDescription';
import ReviewsSlider from 'src/components/MainPage/ReviewsSlider/ReviewsSlider';
import { MainWrapper } from 'src/components/MainPage/AuthSection/AuthSection.styled';
import BtnToTop from 'src/components/shared/BtnToTop/BtnToTop';

export default function MainPage() {
  return (
    <>
      <BtnToTop />
      <AuthSection />
      <MainWrapper>
        <MPDescription />
        <ReviewsSlider />
      </MainWrapper>
    </>
  );
}
