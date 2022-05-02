import commonjs from '@rollup/plugin-commonjs';

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
  extraRollupPlugins: [commonjs()],
};
