/**
 * 
 */

(function(){
	
	'use strict';
	angular.module('eliteApp').controller("TeamsCtrl",['$stateParams','eliteApi',TeamsCtrl])
	
	function TeamsCtrl($stateParams,eliteApi){
		var vm = this;
		var data = eliteApi.getLeagueData();
		vm.teams = data.teams;
	}
})();