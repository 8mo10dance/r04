module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["defaults", "not IE 11", "maintained node versions"],
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ];

  return {
    presets,
  };
};
