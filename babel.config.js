module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "module:metro-react-native-babel-preset",
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            contexts: "./src/contexts",
            hooks: "./src/hooks",
            screens: "./src/screens",
            types: "./src/types",
            MainStackNavigation: "./src/MainStackNavigation",
          },
        },
      ],
    ],
  };
};
