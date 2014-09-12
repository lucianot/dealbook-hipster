define(
  [
    'hbs!../../partials/company/index',
    'hbs!../../partials/company/new'
  ],
  function(
    indexPartial,
    newPartial
  ){
  'use strict';

  function list() {
    var companies = JSON.parse(localStorage.companies);
    render(indexPartial, { companies: companies });
  }

  function add() {
    render(newPartial, {});
  }

  function render(partial, parameters){
    document.body.innerHTML = partial(parameters);
  }

  return {
    list: list,
    add: add
  };
});
