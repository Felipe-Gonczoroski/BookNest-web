import { extendTheme } from '@chakra-ui/react';
import { brand } from './colors.js';

const breakpoints = {
  sm: '700px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

const theme = extendTheme({
  colors: {
    brand,
  },
  breakpoints,
  styles: {
    global: {
      html: {
        fontFamily: 'Inter',
      },
      body: {
        bg: 'brand.white',
        color: 'brand.black',
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;
