'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp.config', [])


  // version of this seed app is compatible with angularFire 0.6
  // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
 .constant('version', '1.0.0')

  // where to redirect users if they need to authenticate (see routeSecurity.js)
  //.constant('loginRedirectPath', '/login')

  // your Firebase data URL goes here
  .constant('fbURLTodo', 'https://hau-todo.firebaseio.com/')

  // double check that the app has been configured before running it and blowing up space and time
  /*.run(['fbURLTodo', '$timeout', function(fbURLTodo, $timeout) {
    if( fbURLTodo.match('//hau-todo.firebaseio.com/') ) {
      angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
      $timeout(function() {
        angular.element(document.body).removeClass('hide');
      }, 250);
    }
  }])*/
  
;


/*********************
 * !!FOR E2E TESTING!!
 *
 * Must enable email/password logins and manually create
 * the test user before the e2e tests will pass
 *
 * user: test@test.com
 * pass: test123
 */