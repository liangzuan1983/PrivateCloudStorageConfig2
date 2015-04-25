var loginControllerModule = angular.module("LoginControllerModule", ['ServiceModule']);

loginControllerModule.controller('LoginController', function($scope, $location, loginService) { 
	//$scope.showLogin = true; 
	var reqParams = {
		action : "login"
	};
	
	$scope.login = function(user) {
		var postData = {
			username : user.name,
			password : user.password
		};
		loginService.events(reqParams, postData).success(function(data, status, headers, config) {
			console.log(data);
			if (data.status == "0") {
				$location.path("/config");
			} else {
				alert("登录失败！");
			}
		}).error(function(data, status, headers, config) {
			alert("登录失败！");
		});
	}; 
});


var configControllerModule = angular.module("ConfigControllerModule", ['ServiceModule']);

configControllerModule.controller('ConfigController', function($scope, getServerDataService) { 
	var reqParams = {
		action : "get_total_status"
	};
	//$scope.mac_addr = "";
	getServerDataService.events(reqParams).success(function(data, status, headers, config) {
		console.log(data);
		$scope.mac_addr = data.ip;
		$scope.ip_addr = data.mac;
		$scope.used_storage = data.usedStorage;
		$scope.all_storage = data.allStorage;
	}).error(function(data, status, headers, config) {
		alert("获取服务器数据失败！");
	});
});

configControllerModule.controller('NetworkConfigController', function($scope) { 
	
});

configControllerModule.controller('RebootConfigController', function($scope, rebootService) { 
	var reqParams = {
		action : "reboot"
	};
	$scope.reboot = function() {
		alert("reboot");
		rebootService.events(reqParams).success(function(data, status, headers, config) {
			console.log("重启成功");
		}).error(function(data, status, headers, config) {
			alert("获取服务器数据失败！");
		});
	}; 
});