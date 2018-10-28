module.exports = {
  "extends": "react-app",
  "globals": {
    "memberBaseUrl": true,
    "trainBaseUrl": true,
    "flightBaseUrl": true,
    "hotelBaseUrl": true,
    "clientHeight": true,
    "clientWidth": true,
  },
  "rules": {
    // "indent": ["error", "tab"], // 空格
    // // 如果一个变量不会被重新赋值，最好使用const进行声明。
    // 'prefer-const': 2,
    // // 在冒号后要加上空格
    // "key-spacing": ["error", { "beforeColon": false }],
    // 不允许使用var
    "no-var": 2,
  }
}