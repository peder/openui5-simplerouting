/// <reference path="https://openui5beta.hana.ondemand.com/resources/sap-ui-core.js" />

jQuery.sap.declare("cag.sbx.Component");

//sap.ui.core.UIComponent.extend("cag.sbx.Component",
//{

sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent)
{
	"use strict";

	return UIComponent.extend("cag.sbx.Component", {

		metadata:
		{
			name: "OpenUI5 Simple Routing",
			includes: [],
			dependencies: {
				libs: ["sap.m", "sap.ui.layout"],
				components: []
			},
			rootView: "cag.sbx.views.App",
			/*rootView: "sap.ui.core.sample.TargetsStandalone.targetsApp.view.App",
			routing: {
				config: {
					targetsClass: "sap.m.routing.Targets",
					viewPath: "sap.ui.core.sample.TargetsStandalone.targetsApp.view",
					controlId: "emptyElement",
					controlAggregation: "masterPages",
					viewType: "XML"
				},
				targets: {
					page1: {
						viewName: "View1",
						viewLevel: 0
					},
					page2: {
						viewName: "View2",
						viewLevel: 1
					}
				}
			}*/

			routing:
			{
				config:
				{
					routerClass: "sap.m.routing.Router",
					viewType: "XML",
					viewPath: "cag.sbx.views",
					targetControl: "splitContainer",
					targetAggregation: "masterPages",
					controlId: "splitContainer",
					controlAggregation: "detailPages",
					clearTarget: false
				},
				routes:
				[
					{
						pattern: "",
						name: "default",
						view: "Home",
						targetAggregation: "pages",
						targetControl: "main"
					},
					{
						pattern: "s",
						name: "_magic",
						view: "SplitContainer",
						targetAggregation: "pages",
						targetControl: "main",
						subroutes: [
						{
							pattern: "s/Details",
							name: "foo_sub1",
							view: "Master",
							targetAggregation: "masterPages",
							targetControl: "splitContainer",
							subroutes: [
							{
								pattern: "s/Details",
								name: "foo_sub2",
								view: "Detail",
								targetAggregation: "detailPages",
							}]
						}]
					}
				]
			}
		},
		init: function()
		{
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
			// this component should automatically initialize the router!

			var router = this.getRouter();
			router.initialize();
		}
	});
}, /* bExport= */ true);