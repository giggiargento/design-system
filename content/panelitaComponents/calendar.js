$('.date-inline').datepicker({
  beforeShow: function( input, inst){
    $(inst.dpDiv).addClass('datepicker-inline');
  },
});