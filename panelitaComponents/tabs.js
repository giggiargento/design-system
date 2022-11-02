$(document).ready(function() {
  $('.ptabs .ptab').on('click', function() {
    $(this).addClass('active')
      .siblings('.ptab').removeClass('active');
  })
})