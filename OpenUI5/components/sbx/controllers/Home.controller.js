﻿/// <reference path="https://openui5.hana.ondemand.com/resources/sap-ui-core.js" />

sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller)
{
	"use strict";

	return Controller.extend("cag.sbx.controllers.Home", {
		onInit: function()
		{
			//this.setModel()
		},
		launchProducts: function()
		{
			//this.getOwnerComponent().getTargets().display("products");
		}
	});

}, /* bExport= */ true);