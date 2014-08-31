//the require library is configuring paths
requirejs.config({
  baseUrl: 'scripts',
  paths: {
    jquery: '../vendors/jquery/dist/jquery'
  },
  shim: {
    jquery: '$'
  }
});

require(['jquery'], function($) {
  var body = $('body');
  body.append('<p>Yo</p>');
});
