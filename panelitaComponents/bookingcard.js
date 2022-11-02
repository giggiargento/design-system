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
    let target = link.closest('.booking-card').next('.preparation-card')
    if (!target.hasClass('visible')) {
      target.addClass('visible');
    }
  }
}

function toggleActionsMobile(btn) {
  btn = $(btn);
  let target = btn.closest('.booking-card').find('.actions');
  if (target.hasClass('visible')) {
    target.removeClass('visible');
  }

  else {
    target.addClass('visible');
  }
}