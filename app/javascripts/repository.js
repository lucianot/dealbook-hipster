define([], function(){
  'use strict';

  function save(model, record) {
    var records = JSON.parse(localStorage[model]);

    console.log("Saving", record);

    records.push(record);
    localStorage[model] = JSON.stringify(records);
    return record;
  }

  function init(model, records) {
    localStorage[model] = JSON.stringify(records);
  }

  return {
    save: save,
    init: init
  };
});
