'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('testing', {
      url: '/testing',
      template: '<testing></testing>'
    });
}
