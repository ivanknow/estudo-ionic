(function() {
	'use strict';
	angular.module("eliteApp").factory('eliteApi', [ '$http', eliteApi ]);

	function eliteApi($http) {
		var currentLeagueId = 0;

		function getLeagues(callback) {
			$http.get("http://elite-schedule.net/api/leaguedata/").success(
					function(data) {
						callback(data);
					});

		}

		function setCurrentLeagueId(id) {
			currentLeagueId = id;
		}

		function getLeagueData(callback) {
			$http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
		      .success(function(data,status) {
		        console.log("Received schedule data via HTTP",data, status);
		        callback(data);
		      })
		      .error(function() {
		        console.log("Error while making HTTP call.");
		      });
		}

		return {
			getLeagues : getLeagues,
			getLeagueData : getLeagueData,
			setCurrentLeagueId : setCurrentLeagueId
		};
	}

})();