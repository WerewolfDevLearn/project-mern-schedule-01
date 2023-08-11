import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import { FlagBtn, Label } from './LangToggler.styled';

export default function LangToggler() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') ?? 'en';

  const { i18n } = useTranslation();

  const handleLangChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    setSearchParams({ lang: value });

    i18n.changeLanguage(value);
  };

  const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

  return (
    <Container>
      {currentLanguage === 'uk' ? (
        <FlagBtn type="button" onClick={handleLangChange} value="gb">
          <span className="circular-flag">
            <span className="fi fi-ua"></span>
          </span>
          <Label>UA</Label>
        </FlagBtn>
      ) : (
        <FlagBtn type="button" onClick={handleLangChange} value="uk">
          <div className="circular-flag">
            <span className="fi fi-gb"></span>
          </div>
          <Label>EN</Label>
        </FlagBtn>
      )}
    </Container>
  );
}
