var logger = require('../log.js');
var OR = require('../OR.json');
//var clickWhenClickable = require('../util/clickWhenClickable.js');

describe("Providing DAN Answer: ", function(){


	it("Verify that DAN Answer is correct", function(){

		browser.sleep(10000);
		
		element(by.id(OR.DANLocator.firstMethodRadio)).click();
		element(by.id(OR.DANLocator.danAnswer)).sendKeys("2000");
		element(by.id(OR.DANLocator.submitBtn)).click();

		

	})

})