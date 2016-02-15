(function() {
	'use strict';
	angular.module("eliteApp").factory('eliteApi', [ '$http','$q','$ionicLoading','CacheFactory', eliteApi ]);

	function eliteApi($http,$q,$ionicLoading,CacheFactory) {
		var currentLeagueId = 0;
		
		self.leaguesCache = CacheFactory.get('leaguesCache');
		self.leagueDataCache = CacheFactory.get('leagueDataCache');

		function getLeagues() {
			var deferred = $q.defer();
			var cacheKey = "leagues";
			var leaguesData = self.leaguesCache.get(cacheKey);
			if(leaguesData){
				console.log("tem coisa na cache");
				deferred.resolve(leaguesData);
			}else{
				$http.get("http://elite-schedule.net/api/leaguedata/").success(
						function(data) {
							console.log("do HTTP call.");
							self.leaguesCache.put(cacheKey,data);
							deferred.resolve(data);
						}).error(function() {
					        console.log("Error while making HTTP call.");
					        deferred.reject(data);
					      });
			}
			
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