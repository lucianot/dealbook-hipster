define(
  [
    'controllers/companies',
    'models/company',
    'views/company/index'
  ],
  function(
    CompaniesController,
    Company,
    CompanyView
  ) {
  'use strict'

  describe('Companies controller', function(){
    var companies = [ new Company('Magnetis'),
                      new Company('RockContent') ];

    beforeEach(function(){
      localStorage.companies = JSON.stringify(companies);
    });

    afterEach(function(){
      localStorage.companies = undefined;
    });

    // describe('#index()', function() {
    //   it('calls view render', function() {
    //     var index = CompaniesController.index();
    //     expect(index.companies).to.be('Magnetis');
    //   });
    // });
  });
});
