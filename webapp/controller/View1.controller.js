sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.vendorassessment.controller.View1", {
            onInit: function () {
                let aDropdown = [
                    {
                        "assessmentid": "AS12455",
                        "assessmenttitle": "EDD",

                        "assessmenttempleteid": "TEM1101",
                        "currentstatus": "Confirmed",
                        "conductedby": "Alex",
                        "conductedon": "22-03-2024"

                    },
                    {
                        "assessmentid": "AS13456",
                        "assessmenttitle": "Integrity Check",

                        "assessmenttempleteid": "TEM1102",
                        "currentstatus": "Pending",
                        "conductedby": "Austin",
                        "conductedon": "24-03-2024"


                    },
                    {
                        "assessmentid": "AS13457",
                        "assessmenttitle": "Vendor check",

                        "assessmenttempleteid": "TEM1105",
                        "currentstatus": "Confirmed",
                        "conductedby": "Alex",
                        "conductedon": "23-03-2024"


                    },
                    {
                        "assessmentid": "AS14457",
                        "assessmenttitle": "SUP12093",

                        "assessmenttempleteid": "TEM1103",
                        "currentstatus": "Pending",
                        "conductedby": "john",
                        "conductedon": "22-03-2024"

                    },
                    {
                        "assessmentid": "AS15458",
                        "assessmenttitle": "EDD",

                        "assessmenttempleteid": "TEM1104",
                        "currentstatus": "Pending",
                        "conductedby": "james",
                        "conductedon": "22-03-2024"


                    },
                ];

                let amodel = new JSONModel(aDropdown);
                this.getView().setModel(amodel, "myModel");

            },
            onCreate: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },

            
        });
    });
