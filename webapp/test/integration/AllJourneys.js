jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 YEGUI0004_STRSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"UI5/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"UI5/test/integration/pages/App",
	"UI5/test/integration/pages/Browser",
	"UI5/test/integration/pages/Master",
	"UI5/test/integration/pages/Detail",
	"UI5/test/integration/pages/Create",
	"UI5/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "UI5.view."
	});

	sap.ui.require([
		"UI5/test/integration/MasterJourney",
		"UI5/test/integration/NavigationJourney",
		"UI5/test/integration/NotFoundJourney",
		"UI5/test/integration/BusyJourney",
		"UI5/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});