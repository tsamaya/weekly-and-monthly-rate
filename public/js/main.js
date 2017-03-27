(function () {
  /* global WeeklyMonthlyRate */

  $('#ratePW').change(function () {
    var pw = $('#ratePW').val();
    var valPCM = Math.round(WeeklyMonthlyRate.ratePerMonth(pw) * 100) / 100;
    $('#ratePCM').val(valPCM);
  });
  $('#ratePCM').change(function () {
    var pcm = $('#ratePCM').val();
    var valPW = Math.round(WeeklyMonthlyRate.ratePerWeek(pcm) * 100) / 100;
    $('#ratePW').val(valPW);
  });
  $('#clear').click(function () {
    $('#ratePW').val('');
    $('#ratePCM').val('');
    return false;
  });
})();
