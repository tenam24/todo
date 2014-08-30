'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('mock.firebase', 'myApp.controllers'));
  //beforeEach(module('myApp.controllers'));

  describe('TodoController', function() {
    var TodoController, $scope;
    beforeEach(function() {
      module(function($provide) {
        // comes from routes.js in the resolve: {} attribute
        $provide.value('Todo', {name: 'test123', done: false});
      });
      inject(function($controller) {
        $scope = {};
        TodoController = $controller('TodoController', {$scope: $scope, Todos: {name: 'test123', done: false}});
      });
    });

    it('should create user in scope', function() {
      //expect($scope.todo).toBeDefined();
    });
  });

  /*
  it('should ....', inject(function($controller) {
    //spec body
    
    //myApp.module.filter('length', function() {
    //  return function(text){
    //    return (''+(text||'')).length;
    //  }
    //});
    
    //$('body').find('span.done-false');
    
    var $scope = {},
        myCtrl1 = $controller('TodoController', { 
        $scope: $scope })//,
        //length = $filter('length')
        ;
    
    $scope.todoText = 'testing';
    $scope.addTodo();    
    //expect($scope.todoText).toContain('');
    expect($scope.todos.length).toEqual(3);
    //expect(length('testing')).toEqual(7);
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
    expect(myCtrl2).toBeDefined();
  }));
  */
});
