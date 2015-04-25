var privateCloudStorageWebConfigApp = angular.module("PrivateCloudStorageWebConfig", ['ngRoute',
	'LoginControllerModule', 'ConfigControllerModule', 'ServiceModule']);

privateCloudStorageWebConfigApp.run(function($rootScope) { 
	$rootScope.showLogin = true; 
	// console.log($rootScope)
}); 


privateCloudStorageWebConfigApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { 
	//$locationProvider.html5Mode(true);
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
		.when('/config/reboot', { 
			templateUrl: 'views/config/reboot.html', 
			controller: 'RebootConfigController' 
		}) 
		.when('/config/disk', { 
			templateUrl: 'views/config/disk.html', 
			controller: 'DiskConfigController' 
		}) 
		.otherwise({ 
			redirectTo: '/' 
		}); 
}]);