describe("Customer Information Test", function(){

    var add_customer = require('../pages/AddCustomerDetails.js');
    it("Adding Customer Information", function(){

        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Samson", "Ojo", "A1223df");
        

    });

    it("Open Account", function(){

        add_customer.gotoOpenAccount();
        add_customer.openAccount("Samson Ojo", "Rupee");


    });

});
