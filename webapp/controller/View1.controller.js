sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.sap.vendorassessment.controller.View1", {
            onInit: function () {
                let aDropdown = [
                    {
                        "assessmentid": "AS12455",
                        "assessmenttitle": "EDD",

                        "assessmenttempleteid": "TEM1101",
                        "currentstatus": "Sent to Supplier",
                        "conductedby": "danara",
                        "conductedon": "22-03-2024"

                    },
                    {
                        "assessmentid": "AS13456",
                        "assessmenttitle": "Integrity Check",

                        "assessmenttempleteid": "TEM1102",
                        "currentstatus": "Draft",
                        "conductedby": "danara",
                        "conductedon": "24-03-2024"


                    },
                    {
                        "assessmentid": "AS13457",
                        "assessmenttitle": "Vendor check",

                        "assessmenttempleteid": "TEM1105",
                        "currentstatus": "Draft",
                        "conductedby": "danara",
                        "conductedon": "23-03-2024"


                    },
                    {
                        "assessmentid": "AS14457",
                        "assessmenttitle": "SUP12093",

                        "assessmenttempleteid": "TEM1103",
                        "currentstatus": "Sent to Supplier",
                        "conductedby": "danara",
                        "conductedon": "22-03-2024"

                    },
                    {
                        "assessmentid": "AS15458",
                        "assessmenttitle": "EDD",

                        "assessmenttempleteid": "TEM1104",
                        "currentstatus": "Draft",
                        "conductedby": "danara",
                        "conductedon": "22-03-2024"


                    },
                ];
                let stableData = [
                    {
                        "supplierid": "SUP1001",
                        "supppliername": "Global Enterprises Inc.",
                        "assessmentstatus": "Complete",
                                              
                    },
                    {
                        "supplierid": "SUP1002",
                        "supppliername": "EuroTech Solutions Ltd",
                        "assessmentstatus": "Pending",
                        
                        
                    },
                    {
                        "supplierid": "SUP1003",
                        "supppliername": "Russian Trading Co.",
                        "assessmentstatus": "Complete",
                                               
                    },
                    
                    ];
                 
            let fModel = new JSONModel(stableData);
            this.getView().setModel(fModel, "fModel")

                let amodel = new JSONModel(aDropdown);
                this.getView().setModel(amodel, "myModel");

            },
            onCreate: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onSee: function () {
                if (!this._F4PrDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.vendorassessment.view.fragment.SeeDetails",
                        controller: this
                    }).then(oDialog => {
                        this._F4PrDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this._F4PrDialog.open()
                }
            },
            onCancel: function () {
                this._F4PrDialog.close();
            },
            onValidate: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView3");
            },
            
        });
    });
