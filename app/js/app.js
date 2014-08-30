'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'myApp.config',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',  
  'firebase',
  'ngRoute'
])
.value('fbURLTodo', 'https://hau-todo.firebaseio.com/')
.factory('Todos', function($firebase, fbURLTodo) {
  return $firebase(new Firebase(fbURLTodo)).$asArray();
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {templateUrl: 'views/todo/index.html', controller: 'TodoController'});
  $routeProvider.when('/todo/delete/:todoId', {templateUrl: 'views/todo/index.html', controller: 'DeleteTodoController'});
  $routeProvider.when('/view2', {templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/todo'});
}])
;