$(document).on('click', '.dropdown-btn', function(event) {
  event.stopPropagation();
  $('.dropdown-menu').hasClass('visible') ? hideMenu() : showMenu(event)
});

$(document).on('click', function(event) {
  if ($('.dropdown-menu').hasClass('visible') && event.target !== $('.dropdown-btn')) {
    hideMenu();
  }
});

$('.dropdown .menu-link').on('click', hideMenu);

function showMenu(event) {
  let target = $(event.target);
  let initialPos = target.offset().top + target.offsetHeight;
  $('.dropdown-menu').css('top', initialPos);
  if (initialPos + $('.dropdown-menu').height() > window.innerHeight) {
    $('.dropdown-menu').css('top', initialPos - $('.dropdown-menu').height());
  }

  $('.dropdown-menu').addClass('visible');
}

function hideMenu() {
  $('.dropdown-menu').removeClass('visible');
}