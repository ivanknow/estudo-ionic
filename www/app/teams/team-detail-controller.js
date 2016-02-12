/**
 * 


(function(){
	
	'use strict';
	
	angular.module('eliteApp').controller("TeamDetailCtrl",['eliteApi','$stateParams',TeamDetailCtrl])
	
	function TeamDetailCtrl($stateParams,eliteApi){
		var vm = this;
		//var data =  {teams:[{"name":"fezes"}]};
		var data = eliteApi.getLeagueData();
		vm.team = data.teams[0];
	}
})(); */

(function() {
	'use strict';

	angular.module('eliteApp').controller('TeamDetailCtrl',
			['eliteApi', TeamDetailCtrl ]);

	function TeamDetailCtrl(eliteApi) {
		var that = this;
		var data =  eliteApi.getLeagueData();
		that.team = data.teams[0].divisionTeams[0].name;
	};

})();