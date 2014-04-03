'use strict';

angular.module('learnKana', [
  'ngRoute',
  'learnKana.filters',
  'learnKana.services',
  'learnKana.directives',
  'learnKana.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/hiragana', {templateUrl: 'partials/hiragana.html', controller: 'hiraganaCtrl'});
  $routeProvider.when('/katakana', {templateUrl: 'partials/katakana.html', controller: 'katakanaCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
