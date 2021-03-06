import url from '@rollup/plugin-url';
import postcssurl from 'postcss-url';

export default {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    globals: {
      blued: 'blued',
    },
    name: 'blued',
    file: 'blued',
  },
  extractCSS: true,
  extraRollupPlugins: [
    url({
      // 1MB
      limit: 1 * 1024 * 1024,
    }),
  ],
  extraPostCSSPlugins: [
    postcssurl({
      url: 'inline',
    }),
  ],
};
