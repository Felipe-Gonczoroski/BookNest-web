import { extendTheme } from '@chakra-ui/react';
import { brand } from './colors.js';

const theme = extendTheme({
  colors: {
    brand,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.whiteSoft',
        color: 'brand.blackSoft',
      },
    },
  },
});

export default theme;
