/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsap/vendorassessment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
