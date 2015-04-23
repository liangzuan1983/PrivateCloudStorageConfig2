var loginControllerModule = angular.module("LoginControllerModule", ['LoginServiceModule']);

loginControllerModule.controller('LoginController', function($scope, loginService) { 
	$scope.showLogin = true; 
	$scope.login = function(username, password) {
		loginService.events(username, password);
	}; 
});