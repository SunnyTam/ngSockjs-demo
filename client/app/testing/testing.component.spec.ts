'use strict';

describe('Component: TestingComponent', function() {
  // load the controller's module
  beforeEach(module('ngsockjsApp.testing'));

  var TestingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TestingComponent = $componentController('testing', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
