define(function(){
  'use strict';

  var routes = {
        '#companies': { controller: 'companiesController', actions:
          {
            '': 'list',
            'new': 'add'
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
        actionHash = _setAction(splitHash[1]),
        route = routes[controllerHash],
        action = route.actions[actionHash];

    console.log('Routing to ' +  route.controller + '#' + action);

    _loadController(route.controller, action);
  }

  function _setAction(hash) {
    if (hash === undefined) {
      return '';
    } else {
      return hash;
    }
  }

  function _loadController(controllerName, actionName){
    require(['controllers/' + controllerName], function(controller){
      controller[actionName]();
    });
  }

  return {
    startRouting: startRouting
  };
});
