import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import gooseRocketMobile from 'src/images/others/mobile/gooseRocketMobile.svg';
import gooseRocketTablet from 'src/images/others/tablet/gooseRocketTablet.svg';

import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';
import { ThemeProvider } from 'styled-components';

import { ErrorPageStyles, ErrorCode, Text, HomeBtn, IconWrapper } from './ErrorPage.styled';

export default function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const theme = useThemeColors().theme;

  return (
    <ThemeProvider theme={theme}>
      <ErrorPageStyles>
        <ErrorCode>
          4
          <IconWrapper>
            <picture>
              <source
                type="image/svg"
                srcSet={`${gooseRocketMobile} 375w, ${gooseRocketTablet} 768w, 1440w`}
                sizes="(max-width: 767px) 375px, (max-width: 1439px) 768px, 1440px"
                alt="🦆"
              />
              <img src={`${gooseRocketTablet}`} alt="" />
            </picture>
          </IconWrapper>
          4
        </ErrorCode>
        <Text>{t('404')}</Text>
        <HomeBtn onClick={() => navigate('/')}>{t('BackHome')}</HomeBtn>
      </ErrorPageStyles>
    </ThemeProvider>
  );
}
