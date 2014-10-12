define(
  [
    'jquery',
    'models/company',
    'hbs!../../partials/company/index',
    'hbs!../../partials/company/new',
    'hbs!../../partials/company/show'
  ],
  function(
    $,
    Company,
    IndexPartial,
    NewPartial,
    ShowPartial
  ){
  'use strict';

  function list() {
    var companies = Company.all();
    _render(IndexPartial, { companies: companies });
  }

  function add() {
    _render(NewPartial, {});
    _bindAddEvents();
  }

  function show(id) {
    var company = Company.find(id);
    _render(ShowPartial, { company: company });
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
    add: add,
    show: show
  };
});
