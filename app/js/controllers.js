'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TodoController', function($scope, Todos) {
        $scope.todos = Todos;
        //$scope.todos = [
        //  {text:'learn angular', done:true},
        //  {text:'build an angular app', done:false}
        //];
        $scope.done = function(id){
          var todoIndex;

          todoIndex = $scope.todos.$indexFor(id);      
          $scope.todo = $scope.todos[todoIndex];
          $scope.todo.done = !$scope.todo.done;
          //console.log($scope);
          Todos.$save($scope.todo);
        };
        
        $scope.addTodo = function() {
          var t={text:$scope.todoText, done:false};
          //$scope.todos.push(t);
          alert('test');
          Todos.$add(t);
          $scope.todoText = '';
        };
     
        $scope.remaining = function() {
          var count = 0;
          angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        $scope.archive = function() {
          var oldTodos = $scope.todos;
          $scope.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
          });
        };
  })
  .controller('DeleteTodoController', function($scope, $location, $routeParams, Todos){
      var todoId = $routeParams.todoId,
            todoIndex;
            
      $scope.todos = Todos;
      todoIndex = $scope.todos.$indexFor(todoId);      
      $scope.todo = $scope.todos[todoIndex];
      
      Todos.$remove($scope.todo).then(function(){
          $location.path('/todo'); //need to go back to list otherwise add function will not work next time
      });
  })
  .controller('MyCtrl2', function($scope, Todos) {
    console.log($scope);
  });
