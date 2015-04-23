var serviceModule = angular.module("ServiceModule", []);

serviceModule.factory('loginService', function($http) {
	var url = 'api/v1/webconfig'; 
	var postData = {
		username : "admin",
		password : "admin"
	};
	var runLoginRequest = function(username, password) { 
		return $http.post(url, postData, {params: {action:"login"}, timeout:5000}).
			success(function(data, status, headers, config) {
				console.log(data);
			}).
			error(function(data, status, headers, config) {
				
			});
	}; 
	return { 
		events: function(username, password) { 
				return runLoginRequest(username, password);
			} 
	}; 
});