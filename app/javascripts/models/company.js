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

  Company.prototype.isValid = function() {
    var isAllValid = 
      this._validatePresenceOf('name') &&
      this._validateUniquenessOf('name');

    return isAllValid;
  }

  // private
  // TODO: make truly private

  Company.prototype._validatePresenceOf = function(attribute) {
    return !!this[attribute];
  }

  Company.prototype._validateUniquenessOf = function(attribute) {
    var currentValue = this[attribute],
        companies = Company.all(),
        existingValues = companies.map(function(company) { return company[attribute]; }),
        index = existingValues.indexOf(currentValue);

    return index < 0;
  }

  return Company;
});
