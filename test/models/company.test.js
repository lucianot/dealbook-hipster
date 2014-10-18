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
      it('saves a new company if valid', function() {
        var newCompany = new Company('ContaAzul');
        expect(newCompany.save()).to.be(newCompany);
      });

      it('throws error if invalid', function() {
        var newCompany = new Company();
        expect(newCompany.save).to.throwException();
      });
    });

    describe('#isValid', function() {
      describe('presence of name', function() {
        it('is true if name is present', function() {
          var newCompany = new Company('ContaAzul');
          expect(newCompany.isValid()).to.be(true);
        });

        it('is true if name is blank', function() {
          var newCompany = new Company();
          expect(newCompany.isValid()).to.be(false);
        });
      });

      describe('uniqueness of name', function() {
        it('is true if name is unique', function() {
          var newCompany = new Company('ContaAzul');
          expect(newCompany.isValid()).to.be(true);
        });

        it('is true if name already exists', function() {
          var newCompany = new Company('Magnetis');
          expect(newCompany.isValid()).to.be(false);
        });
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
