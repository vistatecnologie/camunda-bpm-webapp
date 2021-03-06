'use strict';
var _links = [
  {
    label: 'Documentation',
    href: 'https://docs.camunda.org/manual/latest/webapps/',
    description: 'Camunda webapps user documentation'
  }
];

module.exports = [
  '$window',
  function($window) {
    return $window.camWelcomeConf && $window.camWelcomeConf.links ? $window.camWelcomeConf.links : _links;
  }];