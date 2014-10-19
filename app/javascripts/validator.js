// Validator
define([], function(){
  'use strict';

  function validate(record, validations) {
    var validationMap = {
    			presenceOf: _validatePresenceOf,
    			uniquenessOf: _validateUniquenessOf
    		},
    		errors = [],
        i;

    // Run each validation
    validations.forEach(function(validation) {
    	var validationKey = Object.keys(validation)[0],
    			attribute = validation[validationKey],
    			error = validationMap[validationKey](record, attribute);

    	errors.push(error);
    });

    // Delete nulls
    for(i = errors.length - 1; i >= 0; i--) {
      if(errors[i] === null) {
         errors.splice(i, 1);
      }
    }

    return errors;
  }

  // private

  function _validationErrors(validations) {

  }

  function _validatePresenceOf(record, attribute) {
    return !!record[attribute] ? null : 'presence of ' + attribute;
  }

  function _validateUniquenessOf(record, attribute) {
    var recordType = record.constructor,
    		recordValue = record[attribute],
        existingRecords = recordType.all(),
        existingValues = existingRecords.map(function(record) { return record[attribute]; }),
        index = existingValues.indexOf(recordValue);

    return index < 0 ? null : 'uniqueness of ' + attribute;
  }

  return {
  	validate: validate
  };
});
