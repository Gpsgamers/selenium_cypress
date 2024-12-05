const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('before:browser:launch',async  (browser = {}, launchOptions) => {
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
