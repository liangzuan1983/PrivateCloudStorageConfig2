var loginControllerModule = angular.module("LoginControllerModule", ['ServiceModule']);

loginControllerModule.controller('LoginController', function($scope, loginService) { 
	//$scope.showLogin = true; 
	$scope.login = function(username, password) {
		loginService.events(username, password);
	}; 
});


var configControllerModule = angular.module("ConfigControllerModule", ['ServiceModule']);

configControllerModule.controller('ConfigController', function($scope) { 
	
});

configControllerModule.controller('NetworkConfigController', function($scope) { 
	
});