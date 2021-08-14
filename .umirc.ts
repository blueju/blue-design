import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'blued',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  /**+
   * 修改菜单结构时需要关闭，
   * 详见：https://github.com/umijs/dumi/issues/795
   */
  // mfsu: {},
  mode: 'site',
  history: {
    type: 'hash',
  },
  /**
   * https://d.umijs.org/zh-CN/guide/faq#部署到github-pages
   */
  base: '/blued',
  publicPath: './blued/',
  exportStatic: {},
});
