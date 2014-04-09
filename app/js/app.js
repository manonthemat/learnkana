'use strict';

angular.module('learnKana', [
  'ngRoute',
  'learnKana.filters',
  'learnKana.services',
  'learnKana.directives',
  'learnKana.controllers',
  'ui.bootstrap.collapse'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/hiragana', {templateUrl: 'partials/kana.html', controller: 'kanaCtrl'});
  $routeProvider.when('/katakana', {templateUrl: 'partials/kana.html', controller: 'kanaCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
