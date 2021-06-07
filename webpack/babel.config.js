module.exports = function (api) {
  api.cache(true);

  console.log('-----babel start----');

  const presets = [
    // [
    //   '@babel/preset-env',
    //   {
    //     useBuiltIns: 'entry',
    //     corejs: 3,
    //   },
    // ],
    // '@babel/preset-typescript',
  ];

  const plugins = [
    // '@babel/plugin-proposal-object-rest-spread',
    // '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
    overrides: [
      {
        test: './src/packages/*/component/**/*.tsx',
        plugins: [
          ["babel-plugin-inferno", { "imports": false }],
        ]
      },
      {
        test: './src/packages/*/editor/**/*.tsx',
        plugins: [
          '@babel/plugin-transform-react-jsx',
        ]
      }
    ]
  };
};
