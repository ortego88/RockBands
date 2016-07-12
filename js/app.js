var app = angular.module('rockApp', ['ngRoute']);

app.controller('newController', ['$scope', function($scope){
angular.element(document).ready(function(){
	$('.slider').slider({full_width: true});
});
}]);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/rock', {
			templateUrl: 'views/groups.html', 
			controller: 'viewController'
		})

		.when('/group/:name', {
			templateUrl: 'views/group.html', 
			controller: 'viewController'
		})

		.otherwise({
			redirectTo: '/rock'
		})

}]);

app.controller("viewController", ["$scope","$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.name = $routeParams.name;

	$http.get("js/Bands_Json.json").success(function(data){
		$scope.groups = data;
	});
}]);

app.directive('estNavbar',[function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navbar.html'
	}
}]);

app.directive('estFooter',[function(){
	return {
		restrict: 'E',
		templateUrl: 'views/footer.html'
	}
}]);

