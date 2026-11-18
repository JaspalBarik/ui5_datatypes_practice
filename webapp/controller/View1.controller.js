sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("datatypespractice.controller.View1", {
        onInit: function() {

        // MODEL 1: Product and invoice data
         const oInvoiceModel = new JSONModel({
            Invoices: [
                        {
                            ProductName: "Pineapple",
                            Quantity: 5,
                            ExtendedPrice: 87.2
                        },

                        {
                            ProductName: "Apple",
                            Quantity: 3,
                            ExtendedPrice: 125
                        },

                        {
                            ProductName: "Mango",
                            Quantity: 10,
                            ExtendedPrice: 99.5
                        },

                        {
                            ProductName: "Orange",
                            Quantity: 8,
                            ExtendedPrice: 45.75
                        }

            ]
         });

        // Set the invoice model
        this.getView().setModel(oInvoiceModel, "invoice");

        // MODEL 2: Currency information
        const oViewModel = new JSONModel({
            currency: "EUR"
        });

        // Set the view model
        this.getView().setModel(oViewModel, "view");


        }
    });
});