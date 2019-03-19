jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"UI5/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"UI5/test/integration/pages/App",
	"UI5/test/integration/pages/Browser",
	"UI5/test/integration/pages/Master",
	"UI5/test/integration/pages/Detail",
	"UI5/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "UI5.view."
	});

	sap.ui.require([
		"UI5/test/integration/NavigationJourneyPhone",
		"UI5/test/integration/NotFoundJourneyPhone",
		"UI5/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});