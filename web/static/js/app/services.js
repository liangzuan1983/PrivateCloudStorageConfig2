var loginServiceModule = angular.module("LoginServiceModule", []);

loginServiceModule.factory('loginService', function($http) {
	var url = 'api/v1/webconfig'; 
	var postData = {
		username : "admin",
		password : "admin"
	};
	var runLoginRequest = function(username, password) { 
		return $http.post(url, postData, {params: {action:"login"}, timeout:5000}).
			success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			}).
			error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});
	}; 
	return { 
		events: function(username, password) { 
				return runLoginRequest(username, password);
			} 
	}; 
});