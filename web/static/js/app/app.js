var privateCloudStorageWebConfigApp = angular.module("PrivateCloudStorageWebConfig", ['LoginControllerModule', 'LoginServiceModule']);

privateCloudStorageWebConfigApp.run(function($rootScope) { 
	$rootScope.showLogin = true; 
	// console.log($rootScope)
}); 
