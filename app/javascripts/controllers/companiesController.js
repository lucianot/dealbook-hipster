define(
  [
    'hbs!../../partials/company/index'
  ],
  function(
    indexPartial
  ){
  'use strict';

  function index() {
    var companies = JSON.parse(localStorage.companies);
    render(indexPartial, { companies: companies });
  }

  function render(partial, parameters){
    document.body.innerHTML = partial(parameters);
  }

  return {
    index: index
  };
});
