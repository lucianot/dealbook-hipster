define(
  [
    'repository'
  ],
  function(
    Repo
  ){
  'use strict';

  function Company(name) {
    this.name = name;
    this.id;
  }

  Company.all = function() {
    return Repo.all('companies');
  }

  Company.find = function(id) {
    return Repo.find('companies', id);
  }

  Company.prototype.save = function() {
    Repo.save('companies', this);
    return this;
  }

  return Company;
});
