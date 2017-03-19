/**
 * Created by Samson on 4/26/2016.
 */

var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currencyType = new SelectWrapper(by.id("currency"));
var locator = require("../util/customlocators.js");

var AddCustomerDetails = function(){

    this.gotoAddCustomer = function(){

        element(by.ngClick("addCust()")).click();
        return this;

    };

    this.gotoOpenAccount = function(){

        element(by.ngClick("openAccount()")).click();
        return this;

    };

    this.gotoSearchCustomer = function(){

        element(by.buttonText("Customers")).click();
        return this;

    };

    this.addCustomerInfo = function(fname, lname, postcode){

        element(by.model("fName")).sendKeys(fname);
        element(by.model("lName")).sendKeys(lname);
        element(by.model("postCd")).sendKeys(postcode);
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);
        
    };

    this.openAccount = function(customer, currency){

        mySelect.selectByText(customer);
        currencyType.selectByText(currency);
        element(by.buttonText("Process")).click();


        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    };

    this.validateCustomerRecords = function(){

        element(by.model("searchCustomer")).sendKeys("Raman");

        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));

        firstName.getText().then(function(text){


            console.log(text);
        });

        expect(firstName.getText()).toEqual("Raman");

        browser.sleep(2000);


    };
};
module.exports = new AddCustomerDetails();