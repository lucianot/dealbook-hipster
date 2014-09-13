define(function(){
  var routes = [
        { hash:'#companies', controller:'companiesController', action: 'list' },
        { hash:'#companies/new', controller:'companiesController', action: 'add' }
      ],
      defaultRoute = '#companies',
      currentHash = '';

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(_hashCheck, 100);
  }

  // private

  function _hashCheck(){
    if (window.location.hash != currentHash){
      _findNewRoute();
      currentHash = window.location.hash;
    }
  }

  function _findNewRoute(){
    var currentRoute,
        i;

    for (i = 0, currentRoute; currentRoute = routes[i++];){
      if (window.location.hash == currentRoute.hash) {
        console.log('Routing to ' +  currentRoute.controller + '#' + currentRoute.action);
        _loadController(currentRoute.controller, currentRoute.action);
      }
    }
  }

  function _loadController(controllerName, actionName){
    require(['controllers/' + controllerName], function(controller){
      console.log('Loading controller ' +  controllerName + '#' + actionName);
      controller[actionName]();
    });
  }

  return {
    startRouting: startRouting
  };
});
