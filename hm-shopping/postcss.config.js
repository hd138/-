// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏宽度
      // 设计图750调成一倍 => 设配375标准屏幕
      viewportWidth: 375,
    },
  },
};