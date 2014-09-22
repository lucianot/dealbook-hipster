define([], function(){
  'use strict';

  function save(model, record) {
    var records = _parseRecords(localStorage[model]);

    console.log("Saving", record);

    // Add id to record if none is given
    record.id = record.id || (records.length + 1);

    records.push(record);
    localStorage[model] = JSON.stringify(records);
    return record;
  }

  function init(model, records) {
    localStorage[model] = '[]';

    records.forEach(function(record) {
      save('companies', record);
    });
  }

  // private

  function _parseRecords(records) {
    return JSON.parse(records);
  }

  return {
    save: save,
    init: init
  };
});
