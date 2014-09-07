define(function(){
  var routes = [{ hash:'#companies', controller:'companiesController', action: 'index' }],
      defaultRoute = '#companies',
      currentHash = '';

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(hashCheck, 100);
  }

  function hashCheck(){
    var i,
        currentRoute;

    if (window.location.hash != currentHash){
      for (i = 0, currentRoute; currentRoute = routes[i++];){
        if (window.location.hash == currentRoute.hash)
          loadController(currentRoute.controller, currentRoute.action);
      }
      currentHash = window.location.hash;
    }
  }

  function loadController(controllerName, actionName){
    require(['controllers/' + controllerName], function(controller){
      controller[actionName]();
    });
  }

  return {
    startRouting: startRouting
  };
});
