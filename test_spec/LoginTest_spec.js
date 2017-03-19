var logger = require('../log.js');
var OR = require('../OR.json');


describe("Login Test: ", function(){

	it("Validate user credentials", function(){

		// browser.ignoreSynchronization=true;
		 browser.get(OR.testsiteurl);

		 browser.driver.manage().window().maximize();

		 element(by.id(OR.loginLocator.loginPage.username)).sendKeys(OR.loginLocator.loginData.logCorp.username);
		 element(by.id(OR.loginLocator.loginPage.password)).sendKeys(OR.loginLocator.loginData.logCorp.password);
		 element(by.id(OR.loginLocator.loginPage.orgId)).sendKeys(OR.loginLocator.loginData.logCorp.orgId);
		 element(by.id(OR.loginLocator.loginPage.signInBtn)).click();
		 logger.log('info', 'Successfully logged in to Remita App');

		 browser.ignoreSynchronization = true
//browser.get('http://google.com');
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 60000);
		browser.switchTo().alert().accept();


		 

		
		
	});
});