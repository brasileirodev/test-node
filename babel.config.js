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
          "@modules": "./src/modules",
          "@shared": "./src/shared",
          "@errors": "./src/shared/errors",
          "@config": "./src/config"
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }