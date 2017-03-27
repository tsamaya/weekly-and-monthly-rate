(function () {
  var isPW = false;

  $('#ratePW').change(function () {
    isPW = true;
  });
  $('#ratePCM').change(function () {
    isPW = false;
  });
  $('#compute').click(function () {
    /* global WeeklyMonthlyRate */
    if (isPW) {
      var pw = $('#ratePW').val();
      var valPCM = Math.round(WeeklyMonthlyRate.ratePerMonth(pw) * 100) / 100;
      $('#ratePCM').val(valPCM);
    } else {
      var pcm = $('#ratePCM').val();
      var valPW = Math.round(WeeklyMonthlyRate.ratePerWeek(pcm) * 100) / 100;
      $('#ratePW').val(valPW);
    }
  });
})();
