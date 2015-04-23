var privateCloudStorageWebConfigApp = angular.module("PrivateCloudStorageWebConfig", ['ngRoute',
	'LoginControllerModule', 'ConfigControllerModule', 'ServiceModule']);

privateCloudStorageWebConfigApp.run(function($rootScope) { 
	$rootScope.showLogin = true; 
	// console.log($rootScope)
}); 


privateCloudStorageWebConfigApp.config(['$routeProvider', function($routeProvider) { 
	$routeProvider 
		.when('/', { 
			templateUrl: 'views/login.html', 
			controller: 'LoginController' 
		}) 
		.when('/config', { 
			templateUrl: 'views/config.html', 
			controller: 'ConfigController' 
		}) 
		.when('/config/network', { 
			templateUrl: 'views/config/network.html', 
			controller: 'NetworkConfigController' 
		}) 
		.otherwise({ 
			redirectTo: '/' 
		}); 
}]);