import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Popover } from 'react-tiny-popover';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import { Container, FlagBtn, Label, PopoverWrapper, PopoverItem } from './LangToggler.styled';

export default function LangToggler({ isHomePage, isOpen, togglePopover }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line no-unused-vars
  const lang = searchParams.get('lang') ?? 'en';

  const { i18n } = useTranslation();

  const handleLangChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    setSearchParams({ lang: value });

    i18n.changeLanguage(value);
  };

  const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

  const getFlagBtn = (lang, action) => (
    <FlagBtn
      type="button"
      onClick={action === 'open' ? togglePopover : handleLangChange}
      value={lang}
    >
      <span className={isHomePage ? 'circular-flag square-flag' : 'circular-flag'}>
        <span className={`fi fi-${lang === 'uk' ? 'ua' : lang === 'en' ? 'gb' : lang}`}></span>
      </span>
      <Label>{`${lang === 'uk' ? 'ua' : lang}`.toUpperCase()}</Label>
    </FlagBtn>
  );

  const langs = ['uk', 'en', 'de', 'pl'];

  const popoverContent = (
    <PopoverWrapper>
      {langs.map((lang) => {
        if (lang === currentLanguage) {
          return null;
        }
        return <PopoverItem key={lang}>{getFlagBtn(lang, 'change')}</PopoverItem>;
      })}
    </PopoverWrapper>
  );

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={togglePopover}
      content={popoverContent}
      positions={['bottom', 'center']}
      padding={10}
    >
      <Container>{getFlagBtn(currentLanguage, 'open')}</Container>
    </Popover>
  );
}

LangToggler.propTypes = {
  isHomePage: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  togglePopover: PropTypes.func.isRequired
};
