const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge'||browser.name ==='firefox') {
          launchOptions.args.push('--use-fake-ui-for-media-stream');
          launchOptions.args.push('--use-fake-device-for-media-stream');
          launchOptions.args.push('--disable-popup-blocking');
          launchOptions.args.push('--allow-file-access-from-files'); // Optional for file testing
        }
        return launchOptions;
      });
    },
  },
});
