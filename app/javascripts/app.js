define(
  [
    'jquery',
    'models/company',
    'controllers/companies'
  ],
  function(
    $,
    Company,
    CompaniesController
  ) {
    'use strict';

    console.log('App initialized');

    // Top level App
    function App() {
      _seedCompaniesFixtures();
      CompaniesController.index();
    }

    // Saves companies to local storage to represent DB
    function _seedCompaniesFixtures() {
      var companies = [ new Company('Magnetis'),
                        new Company('RockContent') ];

      for (var i = 0, len = companies.length; i < len; i++){
          console.log(companies[i].name);
      }

      localStorage.companies = JSON.stringify(companies);
    };

    return App;
  }
);
