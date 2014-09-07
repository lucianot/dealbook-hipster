//the require library is configuring paths
requirejs.config({
  baseUrl: '../app/javascripts',
  paths: {
    jquery: '../../vendors/jquery/dist/jquery',
    hbs: '../../vendors/require-handlebars-plugin/hbs'
  },
  shim: {
    jquery: '$'
  }
});

require(['app'], function(App) {
  new App();
});
