// protractor.conf.js

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'results',
  cleanDestination: true,
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: false,
  reportTitle: "Assine NET - Teste Automatizado",
  filename: 'index.html'
});

module.exports.config = {
	// The address of a running selenium server.
  	// seleniumAddress: 'http://mind-alpha.mindteam.me:4444/wd/hub',

  	// Rodar direto no browser local
	directConnect: true,

	capabilities: {
		'browserName': 'chrome',
    // chromeOptions: {
    //   args: ["--headless", "disable-gpu", "--ignore-certificate-errors", "--window-size=1024,768"]
    // }
	},

    specs: [
    'specs/*.js'
  ],

  baseUrl:'https://net.qa.mindteam.me/novo/',

	onPrepare() {
	const width = 1360;
    const height = 768;
    browser.driver.manage().window().setSize(width, height)
		//browser.driver.manage().window().maximize();
		//browser.manage().timeouts().pageLoadTimeout(5000);
    //browser.manage().timeouts().implicitlyWait(4000);

		browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(reporter);
	},

	jasmineNodeOpts: {
        defaultTimeoutInterval: 999999,
        onComplete: null,
        showColors: true,
        includeStackTrace: true
  },


  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }

};
