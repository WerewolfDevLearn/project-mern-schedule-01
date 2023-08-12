import { ThemeTogglerStyles, ToggleThemeBtn, IconLight, IconDark } from './ThemeToggler.styled';
import { useThemeColors } from './ThemeContextProvider';

const ThemeToggler = () => {
  const changeTheme = useThemeColors().changeTheme;

  const handlerChangeTheme = () => {
    changeTheme();
  };
  const type = useThemeColors().type;
  return (
    <ThemeTogglerStyles>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {type === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </ThemeTogglerStyles>
  );
};

export default ThemeToggler;
