// App
define(
  [
    'router',
    'repository',
    'models/company',
  ],
  function(
    Router,
    Repo,
    Company
  ) {
    'use strict';

    console.log('Initializing app...');

    // Top level App
    function App() {
      _seedCompaniesFixtures();
      Router.startRouting();
    }

    // private

    // Saves companies to repo
    function _seedCompaniesFixtures() {
      var companies = [ new Company('Magnetis'),
                        new Company('RockContent') ];

      Repo.init('companies', companies);
    };

    return App;
  }
);
