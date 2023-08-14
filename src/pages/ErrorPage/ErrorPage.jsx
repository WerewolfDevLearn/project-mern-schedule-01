import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ErrorPageStyles, ErrorCode, Text, HomeBtn, IconWrapper } from './ErrorPage.styled';

export default function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ErrorPageStyles>
      <ErrorCode>
        4
        <IconWrapper>
          <picture>
            <source
              type="image/svg"
              srcSet="/src/images/others/mobile/gooseRocketMobile.svg 375w, /src/images/others/tablet/gooseRocketTablet.svg 768w, 1440w"
              sizes="(max-width: 767px) 375px, (max-width: 1439px) 768px, 1440px"
              alt=""
            />
            <img src="/src/images/others/tablet/gooseRocketTablet.svg" alt="" />
          </picture>
        </IconWrapper>
        4
      </ErrorCode>
      <Text>
        {t(
          '404'
        )}
      </Text>
      <HomeBtn onClick={() => navigate('/')}>{t('BackHome')}</HomeBtn>
    </ErrorPageStyles>
  );
}
