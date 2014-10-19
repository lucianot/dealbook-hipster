// Repository
define([], function(){
  'use strict';

  function save(model, record) {
    var records = _parseRecords(localStorage[model]);

    // console.log("Saving", record);

    // Add id to record if none is given
    record.id = record.id || (records.length + 1);

    records.push(record);
    localStorage[model] = JSON.stringify(records);
    return record;
  }

  function all(model) {
    return _parseRecords(localStorage[model]);
  }

  function find(model, id) {
    var records = _parseRecords(localStorage[model]);

    return records.filter(function(record) { return record.id == id; })[0];
  }

  function init(model, records) {
    localStorage[model] = '[]';

    records.forEach(function(record) {
      save('companies', record);
    });
  }

  // private

  function _parseRecords(records) {
    if (records === 'undefined') {
      return [];
    } else {
      return JSON.parse(records);
    }
  }

  return {
    save: save,
    all: all,
    find: find,
    init: init
  };
});
