define(
  [
    'repository'
  ],
  function(
    Repo
  ){
  'use strict';

  function Company(name) {
    this.name = name || 'NewCo';
  }

  Company.prototype.save = function() {
    Repo.save('companies', this);
    return this;
  }

  return Company;
});
