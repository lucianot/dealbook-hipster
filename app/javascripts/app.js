define(
  [
    'models/company',
    'router'
  ],
  function(
    Company,
    Router
  ) {
    'use strict';

    console.log('App initialized');

    // Top level App
    function App() {
      _seedCompaniesFixtures();
      Router.startRouting();
    }

    // Saves companies to local storage to represent DB
    function _seedCompaniesFixtures() {
      var companies = [ new Company('Magnetis'),
                        new Company('RockContent') ];
      localStorage.companies = JSON.stringify(companies);
    };

    return App;
  }
);
