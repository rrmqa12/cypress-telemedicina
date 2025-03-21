const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  pageLoadTimeout: 30000,
  watchForFileChanges: true,
  e2e: {
    retries:{
      runMode: 3, // Quantidade em modo linha de comando
      openMode: 3 //Quantidade em modo interface
    },
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('task', {
        // Limpar cache após cada teste
        'clear:cache': () => {
          const rimraf = require('rimraf');
          rimraf.sync('cypress/cache');
          rimraf.sync('cypress/screenshots');
          rimraf.sync('cypress/videos');
          return null; // É necessário retornar algo para finalizar a task
        },
      });
 
      // Determina o ambiente
      const environment = process.env.CYPRESS_ENV || config.env.environment;
      config.baseUrl = config.env.baseUrl[environment];
      config.env.environment = environment;
 
      return config;
    },
  },
  env: {
    environment: 'homologacao',
    baseUrl: {
      homologacao: 'https://amei-homolog.amorsaude.com.br',
      staging: 'https://amei-staging.amorsaude.com.br',
      producao: 'https://amei.amorsaude.com.br'
    }
  }
});