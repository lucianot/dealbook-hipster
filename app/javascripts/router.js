define(function(){
  'use strict';

  var routes = {
        '#companies':
          {
            controller: 'companiesController',
            actions:
              {
                '': 'list',
                'new': 'add',
                ':id': 'show'
              }
          }
      },
      defaultRoute = '#companies',
      currentHash = '';

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(_hashCheck, 100);
  }

  // private

  function _hashCheck(){
    var windowHash = window.location.hash;

    if (windowHash != currentHash){
      _findNewRoute(windowHash);
      currentHash = window.location.hash;
    }
  }

  function _findNewRoute(hash){
    var splitHash = hash.split('/'),
        controllerHash = splitHash[0],
        actionHash = splitHash[1],
        route = routes[controllerHash],
        controller = _getController(route),
        action = _getAction(route, actionHash),
        params = _getParams(actionHash);

    console.log('Routing to ' +  controller + '#' + action + ', with params ' + params);

    _loadController(controller, action, params);
  }

  function _getController(route) {
    return route.controller;
  }

  function _getAction(route, actionHash) {
    var hash = _checkHash(actionHash),
        action = route.actions[hash],
        defaultKey = '';

    if (action === undefined) {
      return route.actions[defaultKey];
    } else {
      return action;
    }
  }

  function _getParams(actionHash) {
    var hash = _checkHash(actionHash);

    if (hash === ':id') {
      return actionHash;
    } else {
      return null;
    }
  }

  function _checkHash(hash) {
    // If param is an integer, set key for id
    if (!isNaN(hash)) {
      return ':id';
    } else {
      return hash;
    }
  }

  function _loadController(controller, action, params){
    require(['controllers/' + controller], function(controller){
      controller[action](params);
    });
  }

  return {
    startRouting: startRouting
  };
});
