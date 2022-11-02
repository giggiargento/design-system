$('.date-inline').datepicker({
  showOtherMonths: true,
  beforeShow: function( input, inst){
    $(inst.dpDiv).addClass('datepicker-inline');
  },
});