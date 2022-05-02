// 直接使用 father-build 中已安装的 @rollup/plugin-commonjs（幽灵/隐式依赖）
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
