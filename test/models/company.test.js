define(
  [
    'company',
    'repository'
  ],
  function(
    Company,
    Repo
  ) {
  'use strict'

  describe('Company', function(){
    it('has name', function(){
      var company = new Company('Magnetis');
      expect(company).to.have.property('name', 'Magnetis');
    });

    it('sets default if no name', function(){
      var company = new Company();
      expect(company).to.have.property('name', 'NewCo');
    })

    describe('#save', function() {
      var companies = [ new Company('Magnetis'),
                        new Company('RockContent') ];

      beforeEach(function(){
        localStorage.companies = JSON.stringify(companies);
      });

      afterEach(function(){
        localStorage.companies = undefined;
      });

      it('saves a new company into storage', function() {
        var newCompany = new Company('ContaAzul'),
            savedCompaniesCount;

        newCompany.save();
        savedCompaniesCount = JSON.parse(localStorage.companies).length;

        expect(savedCompaniesCount).to.be(3);
      });
    });
  });
});
