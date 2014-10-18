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
    var companiesNames = ['Magnetis', 'RockContent'];

    beforeEach(function(){
      companiesNames.forEach(function(name) {
        new Company(name).save();
      });
    });

    afterEach(function(){
      localStorage.companies = undefined;
    });

    it('has name', function(){
      var company = new Company('ContaAzul');
      expect(company).to.have.property('name', 'ContaAzul');
    });

    describe('#save', function() {
      it('saves a new company into storage', function() {
        var newCompany = new Company('ContaAzul'),
            savedCompaniesCount;

        newCompany.save();
        savedCompaniesCount = JSON.parse(localStorage.companies).length;

        expect(savedCompaniesCount).to.be(3);
      });
    });

    describe('.all', function() {
      it('returns all companies', function() {
        var companies = Company.all();
        expect(companies.length).to.be(2);
      });

      it('returns empty when no companies exist', function() {
        localStorage.companies = undefined;
        var companies = Company.all();
        expect(companies.length).to.be(0);
      });
    });

    describe('.find', function() {
      it('returns company if id is found', function() {
        var company = Company.find(1);
        expect(company.name).to.be('Magnetis');
      });

      it('returns company if no id is found', function() {
        var company = Company.find(3);
        expect(company).to.be(undefined);
      });
    });
  });
});
