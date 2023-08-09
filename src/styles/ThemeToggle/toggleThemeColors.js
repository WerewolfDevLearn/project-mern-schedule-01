import { themeRootColors } from 'styles/themeColors';

const toggleTheme = (toggle) => {
  const {
    backTheme1Color,
    backTheme2Color,
    headThemeColor,
    textTheme1Color,
    textTheme2Color,
    textSecondTheme1Color,
    selectBackTheme1,
    activeTheme1,
    activeTheme2,
    selectTextTheme1,
    categoryTheme1,
    backSecond1,
    backSecond2,
    backThird
  } = themeRootColors;

  if (toggle) {
    document.documentElement.style.setProperty('--back-theme-light', backTheme1Color);
    document.documentElement.style.setProperty('--text-theme-black', textTheme1Color);
    document.documentElement.style.setProperty('--head-theme', headThemeColor);
    document.documentElement.style.setProperty('--text-second-blue', textSecondTheme1Color);
    document.documentElement.style.setProperty('--back-theme-dark', backTheme2Color);
    document.documentElement.style.setProperty('--text-theme-gray', textTheme2Color);
    document.documentElement.style.setProperty('--selectBack-theme-dark', selectBackTheme1);
    document.documentElement.style.setProperty('--active', activeTheme1);
    document.documentElement.style.setProperty('--active-theme-dark', activeTheme2);
    document.documentElement.style.setProperty('--active-select-white', backTheme1Color);
    document.documentElement.style.setProperty('--active-select-green', activeTheme1);
    document.documentElement.style.setProperty('--select-text', selectTextTheme1);
    document.documentElement.style.setProperty('--category-theme', categoryTheme1);
    document.documentElement.style.setProperty('--text-third', activeTheme2);
    document.documentElement.style.setProperty('--back-second-dark', backSecond1);
    document.documentElement.style.setProperty('--back-second-light', backSecond2);
    document.documentElement.style.setProperty('--back-third', backThird);
  } else {
    document.documentElement.style.setProperty('--back-theme-light', backTheme2Color);
    document.documentElement.style.setProperty('--text-theme-black', textTheme2Color);
    document.documentElement.style.setProperty('--head-theme', backTheme1Color);
    document.documentElement.style.setProperty('--back-theme-dark', backTheme1Color);
    document.documentElement.style.setProperty('--text-theme-gray', textTheme1Color);
    document.documentElement.style.setProperty('--text-second-blue', backTheme1Color);
    document.documentElement.style.setProperty('--selectBack-theme-gray', backTheme1Color);
    document.documentElement.style.setProperty('--active', activeTheme2);
    document.documentElement.style.setProperty('--active-select-white', activeTheme1);
    document.documentElement.style.setProperty('--active-select-green', backTheme1Color);
    document.documentElement.style.setProperty('--active-theme-dark', activeTheme1);
    document.documentElement.style.setProperty('--select-text', backTheme1Color);
    document.documentElement.style.setProperty('--category-theme', textTheme2Color);
    document.documentElement.style.setProperty('--text-third', backTheme1Color);
    document.documentElement.style.setProperty('--back-second-dark', backSecond2);
    document.documentElement.style.setProperty('--back-second-light', backTheme2Color);
    document.documentElement.style.setProperty('--back-third', backSecond1);
  }
};

export { toggleTheme };
