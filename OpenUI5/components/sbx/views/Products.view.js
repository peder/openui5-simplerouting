/// <reference path="https://openui5.hana.ondemand.com/resources/sap-ui-core.js" />

sap.ui.jsview("cag.sbx.views.Home",
{
	getControllerName: function()
	{
		return "cag.sbx.controllers.Home"
	},
	createContent: function(controller)
	{
		var button = new sap.ui.commons.Button(
		{
			text: "Hello World!",
			press: controller.test
		});

		return button;
	}
});