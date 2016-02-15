/**
 * 
 */

(function(){
	
	'use strict';
	angular.module('eliteApp').controller("TeamsCtrl",['$scope','$stateParams','eliteApi',TeamsCtrl])
	
	function TeamsCtrl($scope,$stateParams,eliteApi){
		var vm = this;
		vm.loadList = function(forceRefresh){
		eliteApi.getLeagueData().then(function(data){
			vm.teams = data.teams;
			
		}).finally(function(){
			$scope.$broadcast('scroll.refreshComplete');
		});
		}
		
		vm.loadList(false);
	}
})();