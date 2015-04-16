/// <reference path="https://openui5.hana.ondemand.com/resources/sap-ui-core.js" />

jQuery.sap.declare("cag.sbx.Component");

sap.ui.core.UIComponent.extend("cag.sbx.Component",
{
	metadata:
	{
		routing:
		{
			config:
			{
				viewType: "JS",
				viewPath: "cag.sbx.views",
				targetContent: "content",
				targetAggregation: "Pages",
				clearTarget: false
			},
			routes:
			[
				{
					pattern: "products/{id}",
					name: "product",
					view: "Products",
					callback: function() { console.log(arguments); console.log("in products callback"); }
				},
				{
					pattern: "login",
					name: "default",
					view: "Login"
				},
				{
					pattern: "",
					name: "default",
					view: "Home",
					callback: function() { console.log("in default callback"); }
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
		
	}
});