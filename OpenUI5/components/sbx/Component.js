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
		routing:
		{
			config:
			{
				viewType: "JS",
				viewPath: "cag.sbx.views",
				targetControl: "mainSplitContainer",
				targetAggregation: "masterPages",
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
		jQuery.sap.require("sap.ui.core.routing.History");
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		// this component should automatically initialize the router!

		var router = this.getRouter();
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
		router.initialize();
	},
	createContent: function()
	{
		var sc = new sap.m.SplitContainer({
			id: "mainSplitContainer"
		});
		fullscreen = new sap.m.Page(
		{
			id: "mainFullscreen"
			//title: "fullscreen",
			//content: new sap.m.Button({
			//	text: "to master detail",
			//	press: function()
			//	{
			//		app.to(sc.getId())
			//	}
			//})
		});

		app = new sap.m.App({
			pages: [sc, fullscreen]
		});

		return app;
	}
});