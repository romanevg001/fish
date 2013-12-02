'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope, $modal) {
		
		$scope.restorans = [
			{ name: 'Sapore Italiano', api: '2321493', status: 'on'},
			{ name: 'Буковски', api: '2406724', status: 'on'},
			{
				name: 'Бир Хоф',
				api: '2625623',
				status: 'off'
			},
			{
				name: 'Беллуччи',
				api: '3009218',
				status: 'off'
			},
			{
				name: 'Subway',
				api: '2904457',
				status: 'on'
			},
			{
				name: 'Библиотека',
				api: '2441992',
				status: 'on'
			}
		];
		
		$scope.editRest = function(idx) {
			$scope.curentEdit = idx;
			 var modalInstance = $modal.open({
			      templateUrl: 'app/partials/modal.html?dfgj446j',
			      controller: 'editModal',
			   	  scope: $scope
			    });
		 
			 modalInstance.result.then(function (selectedItem) {
			 console.log(selectedItem)
			    //  $scope.selected = selectedItem;
			    }, function () {
			     // $log.info('Modal dismissed at: ' + new Date());
			    });
		}
		
		$scope.removeRest = function(idx) {
		
			$scope.restorans.splice(idx,1);
			
		}
  })
  .controller('editModal', function($scope, $modalInstance) {
  	var currentItem = $scope.restorans[$scope.curentEdit];
  	
  	 	$scope.inputName = currentItem.name;
  	 	$scope.inputApi = currentItem.api;
  	 	
  	 
  	 	$scope.ok = function () {  	
  	 	console.log( $modalInstance); 	 
		    currentItem.name = $scope.inputName;
  	 		currentItem.api = $scope.inputApi;
		 
		    $modalInstance.close($scope.inputName);
		};
		
		$scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		};
		
  })
  
  .controller('MyCtrl2', function() {
	/*	$scope.restorans = [
			{	netName: 'Белини',
				[
					{name: 'Белини на Невском', api: '2321493', status: 'on'}
				]
			},
			
			{ name: 'Буковски', api: '2406724', status: 'on'},
			{
				name: 'Бир Хоф',
				api: '2625623',
				status: 'off'
			},
			{
				name: 'Беллуччи',
				api: '3009218',
				status: 'off'
			},
			{
				name: 'Subway',
				api: '2904457',
				status: 'on'
			},
			{
				name: 'Библиотека',
				api: '2441992',
				status: 'on'
			}
		];*/
  });