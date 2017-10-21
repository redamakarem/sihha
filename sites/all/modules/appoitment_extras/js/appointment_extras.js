(function ($) {
  $(document).ready(function(){
      if($('body').hasClass('user-role-administrator')==false){
      if($('#edit-field-appointment-date-und-0-value-datepicker-popup-0').length){
        $('#field-appointment-date-add-more-wrapper .end-date-wrapper').hide();
          
          var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
          var duration=$('.appdur').html();
          var durationMinutes=parseInt(duration);
          
          var initStartDate=$('#edit-field-appointment-date-und-0-value-datepicker-popup-0').datepicker('getDate');
          $('#edit-field-appointment-date-und-0-value2-datepicker-popup-0').datepicker();
//            $('#edit-field-appointment-date-und-0-value2-datepicker-popup-0').datepicker('setDate',initStartDate);
              var initStartTime=$('#edit-field-appointment-date-und-0-value-timeEntry-popup-1');

          
          $('input[name="field_appointment_date[und][0][value2][time]"]').val(addMinutes(initStartTime.val(),durationMinutes));
          
    $('#edit-field-appointment-date-und-0-value-datepicker-popup-0').datepicker({
        onSelect:function(date){
            var startDate=$(this).datepicker('getDate');
            // console.log(startDate);
            $('#edit-field-appointment-date-und-0-value2-datepicker-popup-0').datepicker();
            $('#edit-field-appointment-date-und-0-value2-datepicker-popup-0').datepicker('setDate',startDate);

        }
    })
}
    var startTime=$('#edit-field-appointment-date-und-0-value-timeEntry-popup-1');
    var endTime=$('edit-field-appointment-date-und-0-value2-timeEntry-popup-1');
    startTime.change(function(){
        // console.log(startTime.val());
        endTime.timeEntry();
        $('input[name="field_appointment_date[und][0][value2][time]"]').val(addMinutes(startTime.val(),durationMinutes));
    })

  }
  });
})(jQuery);

function addMinutes(time, minsToAdd) {
  function D(J){ return (J<10? '0':'') + J};
  var piece = time.split(':');
  var mins = piece[0]*60 + +piece[1] + +minsToAdd;
    return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
}
