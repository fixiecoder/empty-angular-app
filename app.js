var app = angular.module('animater', [
	'ngAnimate',
	'controller.test'
]);


angular.module('controller.test', []).controller('test', function($scope) {
	$scope.name1 = 'Colin';
	$scope.name2 = 'Adams';
	$scope.name = null;

	$scope.isMuted = function(name) {
		return $scope.name !== name && $scope.name !== null;
	}

	$scope.setNameTo = function(name) {
		$scope.name = name;
	}
});