import pxtorpx from 'postcss-pxtorpx-pro';
import tailwindcss from '@tailwindcss/postcss';

const config = {
  plugins: [
    tailwindcss(),
    {
      postcssPlugin: 'postcss-import-css-to-wxss',
      AtRule: {
        import: (atRule) => {
          atRule.params = atRule.params.replace('.css', '.wxss');
        },
      },
    },
    pxtorpx({ transform: (x) => x }),
  ],
};

export default config;
