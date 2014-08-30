'use strict';

/* verify config settings are present */

describe('service', function() {
   beforeEach(module('myApp.config'));

   it('should have the correct URL', inject(function(fbURLTodo) {
      expect(fbURLTodo).toBe('https://hau-todo.firebaseio.com/');
   }));

   it('should have fbURLTodo beginning with https', inject(function(fbURLTodo) {
      expect(fbURLTodo).toMatch(/^https:\/\/[a-zA-Z_-]+\.firebaseio\.com/i);
   }));

   it('should have a valid SEMVER version', inject(function(version) {
      expect(version).toMatch(/^\d\d*(\.\d+)+$/);
   }));
});
