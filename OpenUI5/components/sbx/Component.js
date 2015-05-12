/// <reference path="https://openui5beta.hana.ondemand.com/resources/sap-ui-core.js" />

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
		routing:
		{
			config:
			{
				viewType: "JS",
				viewPath: "cag.sbx.views",
				targetControl: "emptyElement",
				targetAggregation: "masterPages",
				clearTarget: false
			},
			routes:
			[
				{
					pattern: "products/{id}",
					name: "product",
					view: "Products",
				},
				{
					pattern: "login",
					name: "login",
					view: "Login"
				},
				{
					pattern: "",
					name: "default",
					view: "Home",
					subroutes:
						[

						]
				}
			],
			targets:
			{
				detail:
				{
					viewName: 'Detail'
				}
			}
		}
	},
	init: function()
	{
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		// this component should automatically initialize the router!

		var router = this.getRouter();
		router.initialize();
	},
	createContent: function()
	{
		var panel = new sap.m.SplitApp("emptyElement");

		return panel;
	}
});