module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          "@controllers/": "./src/controllers",
          "@views": "./src/views",
          "@models": "./src/models",
          "@config": "./src/config",
          "@repository": "./src/repository",
          "@services": "./src/services",
          "@util": "./src/util"
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }