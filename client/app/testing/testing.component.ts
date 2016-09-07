'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './testing.routes';

export class TestingComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('ngsockjsApp.testing', [uiRouter])
  .config(routes)
  .component('testing', {
    template: require('./testing.html'),
    controller: TestingComponent,
    controllerAs: 'testingCtrl'
  })
  .name;
