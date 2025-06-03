import { extendTheme } from '@chakra-ui/react';
import { brand } from './colors.js';

const theme = extendTheme({
  colors: {
    brand,
  },
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
