﻿var serviceModule = angular.module("ServiceModule", []);

serviceModule.factory('loginService', function($http) {
	var url = 'api/v1/webconfig'; 

	var runLoginRequest = function(reqParams, postData) { 
		return $http.post(url, postData, {params: reqParams, timeout:5000});
	}; 
	return { 
		events: function(reqParams, postData) { 
				return runLoginRequest(reqParams, postData);
			} 
	}; 
});

serviceModule.factory('rebootService', function($http) {
	var url = 'api/v1/webconfig'; 

	var runRebootRequest = function(reqParams) { 
		return $http.get(url, {params: reqParams, timeout:5000});
	}; 
	return { 
		events: function(reqParams) { 
				return runRebootRequest(reqParams);
			} 
	}; 
});


serviceModule.factory('getServerDataService', function($http) {
	var url = 'api/v1/webconfig'; 
	var runRequest = function(reqParams) { 
		return $http.get(url, {params: reqParams, timeout:5000});
	}; 
	return { 
		events: function(reqParams) { 
				return runRequest(reqParams);
			} 
	}; 
});