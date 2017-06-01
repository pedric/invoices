/**********************************************************/
// Author: Fredrik Larsson | epost.larsson@gmail.com
/**********************************************************/

// Init Angular app 'postcardApp' & controller 'appCtrl'
var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.sortOption = 'date';
	$scope.ascDescToggle = true;

	$scope.setSortOption = function(option) {
		if($scope.sortOption === option) {
			$scope.ascDescToggle = !$scope.ascDescToggle;
		} else {
			$scope.sortOption = option;
			$scope.ascDescToggle = true;
		} 
	};

	$scope.setInvoices = function() {
		$http.get('invoices.json').success(function(response) {
			$scope.invoices = response;
		});
	};

	$scope.setInvoices();

	$scope.activeInvoice = function(item) {
		$scope.activeItem = item;
		$scope.displayActiveItem = true;
		$(".invoice-monitor > div").animate({"opacity": "1"}, 150);
	};

	$scope.unsetActiveInvoice = function() {
		$(".invoice-monitor > div").animate({"opacity": "0"}, 150, function() {
			$scope.displayActiveItem = false;
		});
	};

}]);