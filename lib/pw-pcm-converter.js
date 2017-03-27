/*!
 * weekly and monthly rate converter
 * Licensed under the MIT license
 *
 * @author Arnaud Ferrand
 */
(function () {
  'use strict';
  var _rateconv = 1 * 52 / 12;

  // var _isReallyNaN = function (a) {
  //   /* eslint no-self-compare: 0 */
  //   return a !== a;
  //   /* eslint no-self-compare: "error" */
  // };

  var _checkInput = function (input) {
    var i = Number(input);
    if (typeof i !== 'number' || (typeof i === 'number' && isNaN(i))) {
      throw new Error('Invalid input parameter ' + input);
    } else if (i < 0) {
      throw new Error('Invalid negative input parameter ' + input + ' ');
    } else {
      return true;
    }
  };
  // console.log('WeeklyMonthlyRate converter init');
  var WeeklyMonthlyRate = {
    version: '1.0.0',
    /**
     * Compute rate per month given the weekly rate
     * @param  {Number} pw rate per week
     * @return [Number]    rate per month
     */
    ratePerMonth: function (pw) {
      _checkInput(pw);
      return _rateconv * pw;
    },
    /**
     * Compute the rate per week given the monthly rate
     * @param  {Number} pcm rate per month
     * @return [Number]     rate per week
     */
    ratePerWeek: function (pcm) {
      _checkInput(pcm);
      return pcm / _rateconv;
    }
  };

  /* global define */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = WeeklyMonthlyRate;
  } else if (typeof define === 'function' && define.amd) {
    define(WeeklyMonthlyRate);
  }

  if (typeof window !== 'undefined') {
    var oldWeeklyMonthlyRate = window.WeeklyMonthlyRate;

    WeeklyMonthlyRate.noConflict = function () {
      window.WeeklyMonthlyRate = oldWeeklyMonthlyRate;
      return this;
    };

    window.WeeklyMonthlyRate = WeeklyMonthlyRate;
  }
})();
