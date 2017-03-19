/**
 * Created by Samson on 4/6/2016.
 */

require('../util/customlocators');

var HomePage = function(){

    this.loginAsCustomer = function() {

        element(by.partialButtonText("Customer")).click();

    };

    this.loginAsBankManager = function() {

        element(by.ngClick("manager()")).click();
        return require('./AddCustomerDetails.js');

    };
    
};
module.exports = new HomePage();
