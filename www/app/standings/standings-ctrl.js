(function() {
	'use strict';

	angular.module('eliteApp').controller('StandingsCtrl',
			[ 'eliteApi', '$ionicPopup', StandingsCtrl ]);

	function StandingsCtrl(eliteApi, $ionicPopup) {

		var that = this;
		var data = eliteApi.getLeagueData();
		that.standings = data.standings;

		this.chamaPopup = function() {
			var confirm = $ionicPopup.confirm({
				title : "Tem certeza?",
				template : "eim?"
			});
			confirm.than(function(resp){
				if(resp){
					
				}
			});
		}
	}
	;

})();