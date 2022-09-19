// include the sidesheet with class="hide"
// show
// $('.side-panel').removeClass('hide');

$('.side-panel .btn.close').on('click', function() {
  $(this).closest('.side-panel').addClass('hide');
})