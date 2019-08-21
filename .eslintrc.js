module.exports = {

  "globals": {
    describe: true,
    it: true,
  },
  "extends": "react-app",
  "rules" : {
      "indent": ["error", 2], // A custom style-related rule for example
      "semi": ["warn", "never"],
      "quotes": ["error", "single", {"allowTemplateLiterals": true}],
      "jsx-quotes":["error", "prefer-single"],
      // More custom rules here
  }
}
