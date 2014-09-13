define([], function(){
  'use strict';

  function Company(name) {
    this.name = name || 'NewCo';
  }

  Company.prototype.save = function() {
    var companies = JSON.parse(localStorage.companies);

    console.log("Saving", this);

    companies.push(this);
    localStorage.companies = JSON.stringify(companies);
    return this;
  }

  return Company;
});
