define(
  [
    'jquery',
    'models/company',
    'hbs!../../partials/company/index',
    'hbs!../../partials/company/new'
  ],
  function(
    $,
    Company,
    IndexPartial,
    NewPartial
  ){
  'use strict';

  function list() {
    var companies = JSON.parse(localStorage.companies);
    _render(IndexPartial, { companies: companies });
  }

  function add() {
    _render(NewPartial, {});
    _bindAddEvents();
  }

  // private

  function _render(partial, parameters){
    document.body.innerHTML = partial(parameters);
  }

  function _redirectTo(hash) {
    window.location.hash = hash;
  }

  function _bindAddEvents() {
    // On button click
    // TODO: move selector to variable
    $('.js-add-company').click(_buttonClickHandler);
  }

  function _buttonClickHandler() {
    var inputName = $('.js-company-name-input').val(),
        company = new Company(inputName);

    if (company.save()) {
      _redirectTo('#companies');
    } else {
      // re-render form with error messages
    }
  }

  return {
    list: list,
    add: add
  };
});
