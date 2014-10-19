define(
  [
    'validator'
  ],
  function(
    Validator
  ){
  'use strict';

  describe('Validator', function(){
    describe('.validate()', function() {
    	function Foo(bar) {
    		this.bar = bar;
    	};

    	Foo.all = function() {
    		return [ new Foo('first') ];
    	};

	    describe('validates presence', function() {
	    	var validations = [{ presenceOf: 'bar' }];

	      it('returns empty error if attribute is present', function() {
          var foo = new Foo('valid');
          expect(Validator.validate(foo, validations)).to.eql([]);
        });

        it('returns error if attribute is missing', function() {
          var foo = new Foo();
          expect(Validator.validate(foo, validations)).to.eql(['presence of bar']);
        });
	    });

	    describe('validates uniqueness', function() {
	    	var validations = [{ uniquenessOf: 'bar' }];

	      it('returns empty error if attribute is unique', function() {
          var foo = new Foo('second');
          expect(Validator.validate(foo, validations)).to.eql([]);
        });

        it('returns error if attribute already exists', function() {
          var foo = new Foo('first');
          expect(Validator.validate(foo, validations)).to.eql(['uniqueness of bar']);
        });
	    });

	    describe('no validation', function() {
	    	var validations = [];

	      it('returns empty', function() {
          var foo = new Foo('second');
          expect(Validator.validate(foo, validations)).to.eql([]);
        });
	    });
    });
  });
});
