(function() {
	'use strict';

	angular.module('eliteApp').controller('StandingsCtrl',
			['eliteApi', StandingsCtrl ]);

	function StandingsCtrl(eliteApi) {
		var that = this;
		var data =  eliteApi.getLeagueData();
		that.standings = data.standings;
	};

})();