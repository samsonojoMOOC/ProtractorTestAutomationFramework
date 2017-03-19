/**
 * Created by Samson on 4/25/2016.
 */
var home_page = require('../pages/HomePage.js');
var base_page = require('../pages/BasePage.js');

describe("BankManager Login Test", function(){


    it("Login as Bank Manager", function(){

        base_page.navigateToURL("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        home_page.loginAsBankManager().gotoAddCustomer().addCustomerInfo("Samson", "Ojo", "A1223df");
        var title = base_page.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");
        browser.sleep(3000);

    });

});
