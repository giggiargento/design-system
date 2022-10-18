function togglePreparation(link) {
  link = $(link);
  if (link.hasClass('active')) {
    link.removeClass('active');
    let target = link.closest('.booking-card').next('.preparation-card');
    target.removeClass('visible');
  }

  else {
    link.addClass('active');
    link.closest('.booking-card-container').find('.sub-card').removeClass('visible');
    // link.closest('.booking-card-container').addClass('expanded');
    let target = link.closest('.booking-card').next('.preparation-card')
    if (!target.hasClass('visible')) {
      target.addClass('visible');
    }
  }
}