(function() {
	'use strict';
	angular.module("eliteApp").factory('eliteApi', [ '$http','$q','$ionicLoading', eliteApi ]);

	function eliteApi($http,$q,$ionicLoading) {
		var currentLeagueId = 0;
		

		function getLeagues() {
			var deferred = $q.defer();
			$http.get("http://elite-schedule.net/api/leaguedata/").success(
					function(data) {
						deferred.resolve(data);
					}).error(function() {
				        console.log("Error while making HTTP call.");
				        deferred.reject(data);
				      });
			return deferred.promise;

		}

		function setCurrentLeagueId(id) {
			currentLeagueId = id;
		}

		function getLeagueData() {
			
			var deferred = $q.defer();
			$ionicLoading.show({template:"Carregando..."});
			$http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
		      .success(function(data,status) {
		    	  $ionicLoading.hide();
		        console.log("Received schedule data via HTTP",data, status);
		        deferred.resolve(data);
		      })
		      .error(function() {
		    	  $ionicLoading.hide();
		        console.log("Error while making HTTP call.");
		        deferred.reject(data);
		      });
			return deferred.promise;
		}

		return {
			getLeagues : getLeagues,
			getLeagueData : getLeagueData,
			setCurrentLeagueId : setCurrentLeagueId
		};
	}

})();