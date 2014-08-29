'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


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
});
