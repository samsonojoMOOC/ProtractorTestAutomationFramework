var logger = require('../log.js');
var OR = require('../OR.json');
// var SelectWrapper = require('./select-wrapper.js');
// var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Process RRR at Bank Branch ", function(){

	it("Spool RRR Report", function(){

		
		browser.actions().mouseMove(element(by.xpath(OR.RRRProcessing.RRRReportLocate.ReportMain))).click().perform();

		browser.sleep(10000);

		browser.actions().mouseMove(element(by.xpath(OR.RRRProcessing.RRRReportLocate.ReportSubMenu))).click().perform();

		

		//browser.actions().mouseMove(element(by.xpath(OR.RRRProcessing.TellerLocator.ProcessRRRSubMenu))).click().perform();


		//actions().mouseMove(element(by.xpath(OR.RRRProcessing.TellerLocator.BranchOpsMenu))).click().perform();
		//browser.sleep(10000);
		//actions().mouseMove(element(by.xpath(OR.RRRProcessing.TellerLocator.ProcessRRRSubMenu))).click().perform();

		browser.switchTo().frame(0);

		element(by.xpath(OR.RRRProcessing.TellerLocator.RRRField)).sendKeys(element(by.xpath(OR.RRRProcessing.TellerData.RRR)));
		element(by.xpath(OR.RRRProcessing.TellerLocator.SendRRRBtn)).click();

		browser.sleep(20000);
		element(by.xpath(OR.RRRProcessing.TellerLocator.DepositSlipField)).sendKeys(element(by.xpath(OR.RRRProcessing.TellerData.DepositSlipNo)));
		element(by.xpath(OR.RRRProcessing.TellerLocator.SendForApproverBtn)).click();

		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000);
		browser.switchTo().alert().accept();

	})
})