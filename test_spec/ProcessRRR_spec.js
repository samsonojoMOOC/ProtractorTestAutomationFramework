var logger = require('../log.js');
var OR = require('../OR.json');
//var clickWhenClickable = require('../util/clickWhenClickable.js');

describe("Providing DAN Answer: ", function(){


	it("Verify that DAN Answer is correct", function(){

		element(by.xpath(OR.RRRProcessing.TellerLocator.BranchOpsMenu)).click().perform();
		browser.sleep(10000);
		element(by.xpath(OR.RRRProcessing.TellerLocator.ProcessRRRSubMenu)).click().perform();

		browser.switchTo().frame(0);

		element(by.xpath(OR.RRRProcessing.TellerLocator.RRRField)).sendKeys(OR.RRRProcessing.TellerData.RRR);
		element(by.xpath(OR.RRRProcessing.TellerLocator.SendRRRBtn)).click();

		browser.sleep(20000);
		element(by.xpath(OR.RRRProcessing.TellerLocator.DepositSlipField))sendKeys(OR.RRRProcessing.TellerData.DepositSlipNo);
		element(by.xpath(OR.RRRProcessing.TellerLocator.SendForApproverBtn)).click();

		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000);
		browser.switchTo().alert().accept();
	})

})