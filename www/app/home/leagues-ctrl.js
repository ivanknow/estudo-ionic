(function() {
	'use strict';

	angular.module('eliteApp').controller('LeaguesCtrl',
			[ '$state','eliteApi', LeaguesCtrl ]);

	function LeaguesCtrl($state,eliteApi) {
		var that = this;
		
		eliteApi.getLeagues().then(function(data){
			that.leagues = data;	
		});
		
		
		
		that.selectLeague = function(id){
		eliteApi.setCurrentLeagueId(id);
			$state.go("app.teams");
			
		}
	};

})();