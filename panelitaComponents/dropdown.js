$(document).on('click', '.dropdown-btn', function(event) {
  event.stopPropagation();
  $('.pdropdown-menu').hasClass('visible') ? hideMenu() : showMenu(event)
});

$(document).on('click', function(event) {
  if ($('.pdropdown-menu').hasClass('visible') && event.target !== $('.dropdown-btn')) {
    hideMenu();
  }
});

$('.dropdown .menu-link').on('click', hideMenu);

function showMenu(event) {
  let target = $(event.target);
  let initialPos = target.offset().top + target.offsetHeight;
  $('.pdropdown-menu').css('top', initialPos);
  if (initialPos + $('.pdropdown-menu').height() > window.innerHeight) {
    $('.pdropdown-menu').css('top', initialPos - $('.pdropdown-menu').height());
  }

  $('.pdropdown-menu').addClass('visible');
}

function hideMenu() {
  $('.pdropdown-menu').removeClass('visible');
}