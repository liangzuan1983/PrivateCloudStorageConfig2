var loginControllerModule = angular.module("LoginControllerModule", ['ServiceModule']);

loginControllerModule.controller('LoginController', function($scope, loginService) { 
	//$scope.showLogin = true; 
	$scope.login = function(username, password) {
		loginService.events(username, password);
	}; 
});


var configControllerModule = angular.module("ConfigControllerModule", ['ServiceModule']);

configControllerModule.controller('ConfigController', function($scope, getServerDataService) { 
	var reqParams = {
		action : "get_total_status"
	};
	//$scope.mac_addr = "*";
	//$scope.ip_addr = "*";
	getServerDataService.events(reqParams).success(function(data, status, headers, config) {
		console.log(data);
		$scope.mac_addr = data.ip;
		$scope.ip_addr = data.mac;
		$scope.used_storage = data.usedStorage;
		$scope.all_storage = data.allStorage;
	}).error(function(data, status, headers, config) {
		alert("获取服务器数据失败！")
	});
});

configControllerModule.controller('NetworkConfigController', function($scope) { 
	
});