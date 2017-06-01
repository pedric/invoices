var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {

	// Default sortoptions
	$scope.sortOption = 'date';
	$scope.ascDescToggle = true;

	// Set sortoption and toggle asc/desc
	$scope.setSortOption = function(option) {
		if($scope.sortOption === option) {
			$scope.ascDescToggle = !$scope.ascDescToggle;
		} else {
			$scope.sortOption = option;
			$scope.ascDescToggle = true;
		} 
	};

	// Get invoices data
	$scope.setInvoices = function() {
		$http.get('invoices.json').success(function(response) {
			$scope.invoices = response;
		});
	};
	/* Init */
	$scope.setInvoices();

	// Monitor clicked invoice
	$scope.activeInvoice = function(item) {
		$scope.activeItem = item;
		$scope.displayActiveItem = true;
		$(".invoice-monitor > div").animate({"opacity": "1"}, 150);
	};

	// Close monitor
	$scope.unsetActiveInvoice = function() {
		$(".invoice-monitor > div").animate({"opacity": "0"}, 150, function() {
			$scope.displayActiveItem = false;
		});
	};

}]);