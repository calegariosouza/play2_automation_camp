const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://seusite.com',
    viewportWidth: 1920, // Largura desejada
    viewportHeight: 1080, // Altura desejada
  },
})
