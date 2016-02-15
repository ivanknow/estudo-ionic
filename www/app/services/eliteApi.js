(function() {
	'use strict';
	angular.module("eliteApp").factory('eliteApi',
			[ '$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi ]);

	function eliteApi($http, $q, $ionicLoading, CacheFactory) {

		self.leaguesCache = CacheFactory.get('leaguesCache');
		self.leagueDataCache = CacheFactory.get('leagueDataCache');
		self.staticCache = CacheFactory.get('staticCache');
		//codigo para reinserir o cache expirado no cache. nao me pergunte porque
		self.leaguesCache.setOptions({
		        onExpire: function(key, value) {
		          getLeagues()
		            .then(function() {
		              console.log("Leagues Cache was automatically refreshed");
		            }, function() {
		              console.log("Error getting data. Putting exipred item back into the cache", new Date());
		              leaguesCache.put(key, value);
		            });
		        }
		      });
		
		//codigo para reinserir o cache expirado no cache. nao me pergunte porque
		self.leagueDataCache.setOptions({
		        onExpire: function(key, value) {
		          getLeagueData()
		            .then(function() {
		              console.log("Leagues Cache was automatically refreshed");
		            }, function() {
		              console.log("Error getting data. Putting exipred item back into the cache", new Date());
		              leagueDataCache.put(key, value);
		            });
		        }
		      });

		function getLeagues() {
			var deferred = $q.defer();
			var cacheKey = "leagues";
			var leaguesData = self.leaguesCache.get(cacheKey);
			if (leaguesData) {
				console.log("tem coisa na cache");
				deferred.resolve(leaguesData);
			} else {
				$http.get("http://elite-schedule.net/api/leaguedata/").success(
						function(data) {
							console.log("do HTTP call.");
							self.leaguesCache.put(cacheKey, data);
							deferred.resolve(data);
						}).error(function() {
					console.log("Error while making HTTP call.");
					deferred.reject(data);
				});
			}

			return deferred.promise;

		}

		function setLeagueId(leagueId) {
		      self.staticCache.put('currentLeagueId', leagueId);
		    }

		    function getLeagueId() {
		      return self.staticCache.get('currentLeagueId');
		    }


		function getLeagueData(forceRefresh) {
			if(typeof forceRefresh === 'undefined') {forceRefresh = false; }

			var deferred = $q.defer();
			var cacheKey = "leagueData-" + getLeagueId();
			var leaguesData = self.leaguesCache.get(cacheKey);

			if (leaguesData) {
				console.log("tem coisa na cache");
				deferred.resolve(leaguesData);
			} else {

				$ionicLoading.show({
					template : "Carregando..."
				});
				$http.get(
						"http://elite-schedule.net/api/leaguedata/"
								+ getLeagueId()).success(
						function(data, status) {
							$ionicLoading.hide();
							console.log("Received schedule data via HTTP",
									data, status);
							console.log("do HTTP call.");
							self.leaguesCache.put(cacheKey, data);
							deferred.resolve(data);
						}).error(function() {
					$ionicLoading.hide();
					console.log("Error while making HTTP call.");
					deferred.reject(data);
				});

			}
			return deferred.promise;
		}

		return {
			getLeagues : getLeagues,
			getLeagueData : getLeagueData,
			setCurrentLeagueId : setLeagueId
		};
	}

})();