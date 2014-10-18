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

  Company.prototype = (function() {

    // Save record
    function save() {
      var errors = _validateAll(this);

      if (errors.length === 0) {
        Repo.save('companies', this);
        return this;
      } else {
        throw new ValidationError(errors);
      }
    }

    // Check if record is valid
    function isValid() {
      var errors = _validateAll(this);
      return errors.length === 0;
    }

    // private

    // TODO: extract validation to module

    function ValidationError(errors) {
      this.name = 'ValidationError';
      this.message = 'One or more validations have failed';
      this.errors = errors;
    };

    function _validateAll(record) {
      var record = record,
          errors = [],
          i;

      errors.push(_validatePresenceOf(record, 'name'));
      errors.push(_validateUniquenessOf(record, 'name'));

      // Delete nulls
      for(i = errors.length - 1; i >= 0; i--) {
        if(errors[i] === null) {
           errors.splice(i, 1);
        }
      }

      return errors;
    }

    function _validatePresenceOf(record, attribute) {

      return !!record[attribute] ? null : 'presence of ' + attribute;
    }

    function _validateUniquenessOf(record, attribute) {
      var currentValue = record[attribute],
          companies = Company.all(),
          existingValues = companies.map(function(company) { return company[attribute]; }),
          index = existingValues.indexOf(currentValue);

      return index < 0 ? null : 'uniqueness of ' + attribute;
    }

    return {
      constructor: Company,
      save: save,
      isValid: isValid
    };
  })();

  return Company;
});
