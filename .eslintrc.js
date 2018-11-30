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

  // "off" or 0 - turn the rule off
  // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  "rules": {
    // "indent": ["error", "tab"], // 空格
    // // 如果一个变量不会被重新赋值，最好使用const进行声明。
    // 'prefer-const': 2,
    // // 在冒号后要加上空格
    // "key-spacing": ["error", { "beforeColon": false }],
    // 不允许使用var
    "no-var": 0,
  }
}