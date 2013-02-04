'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl', function(){
  var scope, ctrl;

  beforeEach(inject(function($injector, $controller, $rootScope) {  
    scope = $rootScope.$new();
    ctrl = $controller(MyCtrl, { $scope: scope });
  }));

  it('should change greeting value if name value is changed', function() {
    scope.name = "Frederik";
    scope.$digest();
    expect(scope.greeting).toBe("Greetings Frederik");
  });
});