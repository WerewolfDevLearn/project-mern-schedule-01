import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';

import { useGetReviewsQuery } from 'src/redux/reviews/reviewsApi';
import Loader from 'src/components/shared/Loader/Loader';

import { RatingStar } from 'src/components/shared/Icons';

import {
  UserPhoto,
  UserRating,
  UserReview,
  UserTitle,
  UserTop,
  UserTopRight,
  ReviewsItem,
  ReviewsTitle,
  SliderWrapper,
  Wrapper,
  UserIcon,
  SwiperButton
} from './ReviewsSlider.styled';

export default function ReviewsSlider() {
  const { data: { reviews } = [], isLoading } = useGetReviewsQuery();

  const { t } = useTranslation();

  return isLoading ? (
    <Loader />
  ) : (
    <Wrapper>
      <ReviewsTitle>{t('REVIEWS')}</ReviewsTitle>
      <Swiper
        initialSlide={1}
        slidesPerView={1}
        modules={[Navigation, Keyboard, EffectCoverflow, Autoplay]}
        direction={'horizontal'}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: false
        }}
        keyboard={{
          enabled: true
        }}
        navigation={{
          prevEl: '#my-prev-button',
          nextEl: '#my-next-button'
        }}
        breakpoints={{
          1440: {
            slidesPerView: 2
          }
        }}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 10,
          depth: 0,
          modifier: 1,
          slideShadows: false
        }}
      >
        {Array.isArray(reviews) &&
          reviews?.map((review) => {
            const {
              _id,
              rating,
              comment,
              owner: { avatarUrl, name }
            } = review;
            return (
              <SwiperSlide key={_id}>
                <ReviewsItem>
                  <UserTop>
                    {avatarUrl ? (
                      <UserPhoto src={avatarUrl || ''} alt={name || 'Guest'}></UserPhoto>
                    ) : (
                      <UserIcon>
                        <FaUser size="30" color="white" />
                      </UserIcon>
                    )}
                    <UserTopRight>
                      <UserTitle>{name || 'Guest'}</UserTitle>
                      <UserRating>
                        {Array.from({ length: 5 }, (_, index) => (
                          <RatingStar
                            key={index}
                            width={14}
                            height={14}
                            fill={index < rating ? '#FFAC33' : '#CEC9C1'}
                            color={index < rating ? '#FFAC33' : '#CEC9C1'}
                          />
                        ))}
                      </UserRating>
                    </UserTopRight>
                  </UserTop>
                  <UserReview>
                    {comment.length > 150 ? `${comment.slice(0, 150)}...` : comment}
                  </UserReview>
                </ReviewsItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <SliderWrapper>
        <SwiperButton id="my-prev-button">
          <CgArrowLongLeft size={50} color="#3E85F3" />
        </SwiperButton>
        <SwiperButton id="my-next-button">
          <CgArrowLongRight size={50} color="#3E85F3" />
        </SwiperButton>
      </SliderWrapper>
    </Wrapper>
  );
}
