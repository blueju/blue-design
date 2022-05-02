import commonjs from '@rollup/plugin-commonjs';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    globals: {
      blued: 'blued',
    },
    name: 'blued',
    file: 'blued',
  },
  extraRollupPlugins: [commonjs()],
};
