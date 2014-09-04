define(
  [
    'jquery'
  ],
  function
  (
    $
  ){
  'use strict'

  function render(parameters){
    var appDiv = $('.app');

    var companies = parameters.companies;
    var html = '<ul>';

    for (var i = 0, len = companies.length; i < len; i++) {
      html += '<li>' + companies[i].name + '</li>';
    }
    html += '</ul>';
    appDiv.append(html);
  }

  return {
    render: render
  };
});
