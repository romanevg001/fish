'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
  ,'ui.bootstrap', 
  'plunker'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
	  .when('/', {templateUrl: '/app/partials/partial1.html', controller: 'MyCtrl1'})
	  .when('/add', {templateUrl: '/app/partials/partial2.html', controller: 'MyCtrl2'})
	  
	  .otherwise({redirectTo: '/'});
  	
  
}]);
