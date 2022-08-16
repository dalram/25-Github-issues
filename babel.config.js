module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
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
          },
        },
      ],
    ],
  };
};
