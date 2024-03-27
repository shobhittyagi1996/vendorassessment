sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.vendorassessment.controller.View2", {
            onInit: function () {
                let data = [{

                    "question": "Are there any personal relationships between key personnel of your company or its Affiliates, and KPO Key Personnel?"
                },
                {

                    "question": "Are you aware of anti-bribery laws applicable to your company in the Republic of Kazakhstan?"
                },
                {

                    "question": "Does your company have policies to ensure compliance/ethical conduct in accordance with anti-bribery laws?"
                },
                {

                    "question": "Has your company’s senior management formally approved the compliance/ethical conduct policies?"
                },
                {

                    "question": "Does your company provide training for all employees in your organization on ethical conduct and anti-corruption?"
                },
                {

                    "question": "Kindly refer to the KPO Code of Conduct and confirm that your company does business in a manner consistent with KPO’s Code of Conduct?"
                },
                {

                    "question": "With regards to bribery, corruption or dishonest dealings with third parties, in the last 3 years, has your company been subjected to any external investigation?Has such an investigation been concluded and/or are there currently any outstanding investigations against your company?"
                }

                ];
                let dDropdown = [
                    {
                        "text": "SUP12345"
                    },
                    {
                        "text": "SUP23456"
                    },
                    {
                        "text": "SUP34567"
                    }];

                let tableData = [
                    {
                        "supplierno": "SUP12345",
                        "legalname": "Global Enterprises Inc.",
                        "companyorigin": "United States",
                        "vat": "GBVAT456",
                        "bin": "BICEU456",
                       
                    },
                    {
                        "supplierno": "SUP23456",
                        "legalname": "EuroTech Solutions Ltd",
                        "companyorigin": "United States",
                        "vat": "USVAT123",
                        "bin": "BICUS123",
                        
                    },
                    {
                        "supplierno": "SUP90123",
                        "legalname": "Russian Trading Co.",
                        "companyorigin": "Russia",
                        "vat": "RUVAT345",
                        "bin": "BICRU345",
                       
                    },
                    {
                        "supplierno": "SUP10056",
                        "legalname": "Scandinavian Imports",
                        "companyorigin": "Sweden",
                        "vat": "SEVAT234",
                        "bin": "BICSE234",
                        
                    },
                    {
                        "supplierno": "SUP10456",
                        "legalname": "Middle East Traders	",
                        "companyorigin": "UAE",
                        "vat": "USVAT133",
                        "bin": "BICUS423",
                        
                    },
                    {
                        "supplierno": "SUP37856",
                        "legalname": "African Trade Co.",
                        "companyorigin": "United States",
                        "vat": "USVAT123",
                        "bin": "BICUS123",
                        "lastverifyon": "2024"
                    },
                    {
                        "supplierno": "SUP09156",
                        "legalname": "Oceania Enterprises",
                        "companyorigin": "Australia",
                        "vat": "AUSVAT103",
                        "bin": "BICUS123",
                        "lastverifyon": "2024"
                    },
                    {
                        "supplierno": "SUP34567",
                        "legalname": "Asia-Pacific Traders",
                        "companyorigin": "Singapore",
                        "vat": "SGVAT789",
                        "bin": "BICSG789",
                        "lastverifyon": "2024"
                    }];
                let atDropdown = [
                    {
                        "text": "EDD"
                    },
                    {
                        "text": "Integrity Check"
                    },
                    {
                        "text": "SUP3762"
                    },
                    {
                        "text": "SUP34567"
                    }];


                let Model = new JSONModel(atDropdown);
                this.getView().setModel(Model, "atModel")
                let oModel = new JSONModel(data);
                this.getView().setModel(oModel, "myModel")
                let sModel = new JSONModel(dDropdown);
                this.getView().setModel(sModel, "sModel")
                let model = new JSONModel(tableData);
                this.getView().setModel(model, "tModel")



            },


        });
    });
