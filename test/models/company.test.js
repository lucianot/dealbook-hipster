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
      expect(company).to.have.property('name', 'Magnetis');
    });

    it('sets default if no name', function(){
      var company = new Company();
      expect(company).to.have.property('name', 'NewCo');
    })
  });
});
