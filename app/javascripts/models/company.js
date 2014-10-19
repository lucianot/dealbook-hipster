define(
  [
    'repository',
    'validator'
  ],
  function(
    Repo,
    Validator
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
    var validations = [
      { presenceOf: 'name' },
      { uniquenessOf: 'name' }
    ]

    // Save record
    function save() {
      var errors = Validator.validate(this, validations),
          isValid = errors.length === 0;

      if (isValid) {
        Repo.save('companies', this);
        return this;
      } else {
        throw new ValidationError(errors);
      }
    }

    // Check if record is valid
    function isValid() {
      var errors = Validator.validate(this, validations);
      return errors.length === 0;
    }

    // private

    function ValidationError(errors) {
      this.name = 'ValidationError';
      this.message = 'One or more validations have failed';
      this.errors = errors;
    };

    return {
      constructor: Company,
      save: save,
      isValid: isValid
    };
  })();

  return Company;
});
