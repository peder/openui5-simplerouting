/// <reference path="https://openui5.hana.ondemand.com/resources/sap-ui-core.js" />

jQuery.sap.declare("cag.sbx.Component");

sap.ui.core.UIComponent.extend("cag.sbx.Component",
{
	metadata:
	{
		name: "OpenUI5 Simple Routing",
		includes: [],
		dependencies: {
			libs: ["sap.m", "sap.ui.layout"],
			components: []
		},
		rootView: "cag.sbx.views.Home",
		config:
		{
			
		},
		routing:
		{
			config:
			{
				viewType: "JS",
				viewPath: "cag.sbx.views",
				targetControl: "emptyElement",
				clearTarget: false
			},
			routes:
			[
				{
					pattern: "products/{id}",
					name: "product",
					view: "Products"
				},
				{
					pattern: "login",
					name: "login",
					view: "Login",
					callback: function() { console.log("in login callback"); }
				},
				{
					pattern: "",
					name: "default",
					view: "Home"
				}
			]
		}
	},
	init: function()
	{
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		// this component should automatically initialize the router!
		this.getRouter().initialize();
	},
	createContent: function()
	{
		var panel = new sap.ui.commons.ResponsiveContainer("emptyElement");

		return panel;
	}
});