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
    var errors = this._validateAll();

    if (errors.length === 0) {
      Repo.save('companies', this);
      return this;
    } else {
      throw new ValidationError(errors);
    }
  }

  Company.prototype.isValid = function() {
    var errors = this._validateAll();
    return errors.length === 0;
  }

  // private
  // TODO: make truly private

  function ValidationError(errors) {
    this.name = 'ValidationError';
    this.message = 'One or more validations have failed';
    this.errors = errors;
  };

  Company.prototype._validateAll = function() {
    var errors = [],
        i;

    errors.push(this._validatePresenceOf('name'));
    errors.push(this._validateUniquenessOf('name'));

    // Delete nulls
    for(i = errors.length - 1; i >= 0; i--) {
      if(errors[i] === null) {
         errors.splice(i, 1);
      }
    }

    return errors;
  }

  Company.prototype._validatePresenceOf = function(attribute) {
    return !!this[attribute] ? null : 'presence of ' + attribute;
  }

  Company.prototype._validateUniquenessOf = function(attribute) {
    var currentValue = this[attribute],
        companies = Company.all(),
        existingValues = companies.map(function(company) { return company[attribute]; }),
        index = existingValues.indexOf(currentValue);

    return index < 0 ? null : 'uniqueness of ' + attribute;
  }

  return Company;
});
