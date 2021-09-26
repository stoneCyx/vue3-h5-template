module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, // vant以375为基准
      unitPrecision: 5, // 保留几位小数，指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.novw'], // 过滤掉.novw-开头的class，不进行rem转换
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
  }
}