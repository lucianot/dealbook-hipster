//the require library is configuring paths
requirejs.config({
  baseUrl: '../app/javascripts',
  paths: {
    'jquery': '../../vendors/jquery/dist/jquery',
  },
  shim: {
    jquery: '$'
  }
});

require(['app'], function(App) {
  new App();
});
