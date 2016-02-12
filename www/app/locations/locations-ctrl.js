(function() {
	'use strict';

	angular.module('eliteApp').controller('LocationsCtrl',
			['eliteApi', LocationsCtrl ]);

	function LocationsCtrl(eliteApi) {
		var that = this;
		var data =  eliteApi.getLeagueData();
		that.locations = data.locations;
	};

})();