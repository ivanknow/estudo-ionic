/**
 * 
 */

(function(){
	
	'use strict';
	angular.module('eliteApp').controller("TeamsCtrl",['$stateParams','eliteApi',TeamsCtrl])
	
	function TeamsCtrl($stateParams,eliteApi){
		var vm = this;
		eliteApi.getLeagueData().then(function(data){
			vm.teams = data.teams;
			
		});
	}
})();