import { extendTheme, type ThemeConfig, theme as base } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const fonts = {
  heading: `Lobster, ${base.fonts.heading}`,
  body: `Crimson Pro, ${base.fonts.body}`,
};

const theme = extendTheme({
  config,
  fonts,
});

export default theme;