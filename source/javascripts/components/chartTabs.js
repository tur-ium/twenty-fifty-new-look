define(['knockout', 'text!/components/chart-tabs.html', 'dataRequester', 'chartParser', 'pathway', 'bindings/chart'], function(ko, html, DataRequester, ChartParser, Pathway) {
  'use strict';

  var ViewModel = function(params) {
    var self = this;

    // - For chartView components TODO: fix them so they can require? :) --
    self.DataRequester = DataRequester;
    self.ChartParser = new ChartParser();
    self.Pathway = Pathway;
    // ---------------

    self.pathway = params.pathway;

    self.CHART_TABS = [
      { "id": 1, "name": "energy", "title": "Energy", "viewmodel": "tabbed", "charts": [
          { "id": 1, "name": "EnergyDemandChart", "title": "Demand vs Supply" },
          { "id": 2, "name": "EnergySupplyChart", "title": "Supply vs Demand" }
        ]
      },
      // { "id": 2, "name": "electricity", "title": "Electricity" },
      // { "id": 3, "name": "emissions", "title": "Emissions" },
      // { "id": 4, "name": "flows", "title": "Flows" },
      // { "id": 5, "name": "map", "title": "Map" },
      // { "id": 6, "name": "air", "title": "Air" },
      // { "id": 7, "name": "energy-security", "title": "Energy Security" },
      { "id": 8, "name": "costs", "title": "Costs", "charts": [
          { "id": 1, "name": "CostsContextChart", "title": "In Context" },
          { "id": 2, "name": "CostsComparedChart", "title": "Compared" },
          { "id": 3, "name": "CostsContextChart", "title": "Sensitivity" }
        ]
      },
      // { "id": 9, "name": "overview", "title": "Overview" }
    ]

    self.CHARTS = [
      { "id": 1, "name": "energyDemand", "title": "Demand vs Supply" },
      { "id": 2, "name": "energySupply", "title": "Supply vs Demand" },
      { "id": 3, "name": "electricity", "title": "Electricity" },
      { "id": 4, "name": "emissions", "title": "Emissions" },
      { "id": 5, "name": "flows", "title": "Flows" },
      { "id": 6, "name": "map", "title": "Map" },
      { "id": 7, "name": "air", "title": "Air" },
      { "id": 8, "name": "energy-security", "title": "Energy Security" },
      { "id": 9, "name": "costs", "title": "Costs" },
      { "id": 10, "name": "overview", "title": "Overview" }
    ];

    self.currentTabId = ko.observable(8);

    /** Sets visible tab */
    self.setActiveTab = function(chart) {
      self.currentTabId(chart.id);
    };

  };

  return {
    viewModel: ViewModel,
    template: html
  }

});

