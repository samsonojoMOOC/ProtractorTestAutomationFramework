var logger = require('../log.js');
var OR = require('../OR.json');


describe("Test Login", function(){

	it("Validate user credentials first", function(){

		browser.get("http://www.hdfcbank.com/");

		logger.log('info', 'Navigating to the Website');

		element(by.id("loginsubmit")).click();

		logger.log('info', 'Clicked login button');
		
		browser.getAllWindowHandles().then(function(handles){

			logger.log('info', 'Navigating out of the Window to another Window Tab');

			browser.switchTo().window(handles[1]).then(function(){

				element(by.linkText("Apply now")).click();
				browser.sleep(5000);

				logger.log('info', 'Clicked Apply Now button');

				browser.getAllWindowHandles().then(function(handles){

					browser.switchTo().window(handles[2]).then(function(){

						element(by.id("eForm_form_applicantPlaceHolder_residenceCity_value")).sendKeys("Noida");
						browser.sleep(5000);

						logger.log('info', 'Navigating to the 3rd Window');

						
							browser.switchTo().window(handles[1]).then(function(){

								logger.log('info', 'Navigating back to the original window');

								browser.getTitle().then(function(title){
									console.log("Website Title: "+ title);
								})

							
							})
						
				
				
					})
				});

				
			})
		});


	});

	it("Validate user credentials second", function(){

		// browser.ignoreSynchronization=true;
		browser.get(OR.testsiteurl);

		 element(by.id(OR.locators.username)).sendKeys("TELLER1");
		 element(by.id(OR.locators.password)).sendKeys("REMITA1");
		 element(by.id(OR.locators.orgId)).sendKeys("032");
		 element(by.id(OR.locators.signInBtn)).click();
		// browser.driver.manage().setTimeout(function() {}, 60000);
		


	});
});

