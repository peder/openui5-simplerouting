/// <reference path="https://openui5beta.hana.ondemand.com/resources/sap-ui-core.js" />

sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller)
{
	"use strict";

	return Controller.extend("cag.sbx.controllers.Products", {
		test: function()
		{
			alert("woo!");
		}
	});

}, /* bExport= */ true);