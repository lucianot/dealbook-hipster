define(
  [
    'views/company/index'
  ],
  function(
    CompanyView
  ){
  'use strict';

  function index() {
    var companies = JSON.parse(localStorage.companies);
    CompanyView.render({ companies: companies });
  }

  return {
    index: index
  };
});
