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

function showSubcard(btn) {
  btn = $(btn);
  let action = btn.attr('data-action');
  let target = btn.closest('.booking-card-container').find(`.sub-card.${action}-card`);
  if (!target.hasClass('visible')) {
    $('.sub-card').not(target).removeClass('visible');
    btn.closest('.booking-card-container').addClass('expanded');
    target.addClass('visible');
    animateShowSubcard(target);
  };
}

function animateShowSubcard(card) {
  card[0].scrollIntoView({behavior: 'smooth'});
  if (card.find('select').length > 0) {
    $('select').chosen()
  };
}

function animateHideSubcard(btn) {
  btn = $(btn);
  let target = btn.closest('.sub-card');
  btn.closest('.booking-card-container').removeClass('expanded');
  if (target.hasClass('visible')) {
    target.removeClass('visible');
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