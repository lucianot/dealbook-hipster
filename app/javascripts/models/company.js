define([], function(){
  'use strict';

  function Company(name) {
    this.name = name || 'NewCo';
  }

  return Company;
});
