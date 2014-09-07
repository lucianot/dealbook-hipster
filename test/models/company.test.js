define(
  [
    'company'
  ],
  function(
    Company
  ) {
  'use strict'

  describe('Company', function(){
    it('has name', function(){
      var company = new Company('Magnetis');
      expect(company.name).to.be('Magnetis');
    });

    it('sets default if no name', function(){
      var company = new Company();
      expect(company.name).to.be('NewCo');
    })
  });
});
