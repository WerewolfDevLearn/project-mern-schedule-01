import { useTranslation } from 'react-i18next';
import routes from 'src/routes';
import { CgLogIn } from 'react-icons/cg';
import LangToggler from 'src/components/shared/LangToggler/LangToggler';
import logoMobile from 'src/images/others/mobile/goose1x.png';

import logoMobile2x from 'src/images/others/mobile/goose2x.png';
import logoMobile3x from 'src/images/others/mobile/goose3x.png';
import logoTablet from 'src/images/others/tablet/goose1x.png';
import logoTablet2x from 'src/images/others/tablet/goose2x.png';
import logoTablet3x from 'src/images/others/tablet/goose3x.png';
import logo from 'src/images/others/desktop/goose1x.png';
import logo2x from 'src/images/others/desktop/goose2x.png';
import logo3x from 'src/images/others/desktop/goose3x.png';

import {
  StyledHero,
  StyledImg,
  HeroTitle,
  HeroTitleSpan,
  Wrapper,
  AuthWrapper,
  AuthLink
} from './AuthSection.styled.jsx';

export default function AuthSection() {
  const { t } = useTranslation();

  return (
    <StyledHero>
      <LangToggler />
      <StyledImg>
        <source
          media="(max-width: 767px)"
          srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x, ${logoMobile3x} 3x`}
        />
        <source
          media="(min-width: 768px) and (max-width: 1439px)"
          srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x, ${logoTablet3x} 3x`}
        />
        <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
        <img src={logoMobile} alt="Logo goose" />
      </StyledImg>
      <HeroTitle>
        G<HeroTitleSpan>oo</HeroTitleSpan>seTrack
      </HeroTitle>

      <Wrapper>
        <AuthWrapper>
          <AuthLink to={routes.registerPage}>{t('Sign up')}</AuthLink>
          <AuthLink to={routes.loginPage} color="blue" colorbtn="white">
            {t('Log in')}
            <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
          </AuthLink>
        </AuthWrapper>
      </Wrapper>
    </StyledHero>
  );
}
