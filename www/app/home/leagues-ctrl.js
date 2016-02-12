(function() {
	'use strict';

	angular.module('eliteApp').controller('LeaguesCtrl',
			[ '$state','eliteApi', LeaguesCtrl ]);

	function LeaguesCtrl($state,eliteApi) {
		var that = this;
		var leagues = eliteApi.getLeagues();
		that.leagues = leagues;
		
		that.selectLeague = function(id){
		//TODO
			$state.go("app.teams");
			
		}
	};

})();