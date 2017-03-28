/* eslint no-unused-expressions: "off" */

var expect = require('chai').expect;
// var converter = require('./../../lib/pw-pcm-converter');
var rateConverter = require('./../../'); // root index

describe('converter', function () {
  describe('weekly', function () {
    describe('input', function () {
      it('test number', function () {
        var pw = 100;
        var pcm = rateConverter.ratePerMonth(pw);
        expect(pcm).to.equal(pw * 52 / 12);
      });

      it('test negative number', function () {
        var pw = -100;
        var fct = function () {
          rateConverter.ratePerMonth(pw);
        };
        expect(fct).to.throw;
        expect(fct).to.throw(Error, 'Invalid negative input parameter ' + pw);
      });

      it('test string as number', function () {
        var pw = '100';
        var pcm = rateConverter.ratePerMonth(pw);
        expect(pcm).to.equal(pw * 52 / 12);
      });

      it('test not a number ', function () {
        var pw = 'a';
        var fct = function () {
          rateConverter.ratePerMonth(pw);
        };
        expect(fct).to.throw;
        expect(fct).to.throw(Error, 'Invalid input parameter ' + pw);
      });
    });
  }); // weekly

  describe('monthly', function () {
    describe('input', function () {
      it('test number', function () {
        var pcm = 1000;
        var pw = rateConverter.ratePerWeek(pcm);
        expect(pw).to.equal(pcm / 52 * 12);
      });

      it('test negative number', function () {
        var pcm = -1000;
        var fct = function () {
          rateConverter.ratePerWeek(pcm);
        };
        expect(fct).to.throw;
        expect(fct).to.throw(Error, 'Invalid negative input parameter ' + pcm);
      });

      it('test string as number', function () {
        var pcm = '1000';
        var pw = rateConverter.ratePerWeek(pcm);
        expect(pw).to.equal(pcm / 52 * 12);
      });

      it('test not a number ', function () {
        var pcm = 'a';
        var fct = function () {
          rateConverter.ratePerWeek(pcm);
        };
        expect(fct).to.throw;
        expect(fct).to.throw(Error, 'Invalid input parameter ' + pcm);
      });
    });
  }); // monthly
});
