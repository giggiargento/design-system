$(document).ready(function() {
  if ($('.sidebar').length > 0) {

    // // inicializa sidebar sólo desplegando la sección del link activo (si es el caso)
    // let activeSection = $('.sidebar-link.active').closest('.sidebar-section');
    //   activeSection.removeClass('collapsed')
    //   .find('.section-links').slideDown({
    //     complete: checkScroll()
    //   });
    
    // $('.sidebar-section.collapsible').not(activeSection).find('.section-links').slideUp();
    
    $(document).on('click', '.sidebar-section.collapsible .title', function() {
      var section = $(this).parent('.sidebar-section');
      if ($('.sidebar').hasClass('sidebar-collapsed')) {
        animateExpandandShowSection(section);
      }
  
      else {
        if (!section.hasClass('collapsed')) {
          section.find('.section-links').slideUp();
          section.addClass('collapsed');
        }
    
        else {
          section.find('.section-links').slideDown();
          section.removeClass('collapsed');
        }
      }
    });
  
    $(document).on('click', '.sidebar .slide-btn', function() {
      var isSidebarCollapsed = $('.sidebar').hasClass('sidebar-collapsed');
      isSidebarCollapsed ? animateShowElements() : animateHideElements();
    });
  
    function animateHideElements() {
      $('.sidebar-title p').fadeOut();
      $('.slide-btn').addClass('rotated');
      $('.section-links').slideUp();
      $('.sidebar-section').addClass('collapsed');
      $('.sidebar-section .title span').fadeOut({
        complete: function() {
          $('.sidebar').addClass('sidebar-collapsed');
          $('.sidebar-loader').addClass('sidebar-collapsed');
        }
      });
    }
  
    function animateShowElements() {
      $('.sidebar').removeClass('sidebar-collapsed');
      $('.sidebar-loader').removeClass('sidebar-collapsed');
      $('.slide-btn').removeClass('rotated');
      $('.sidebar-title p').fadeIn();
      $('.sidebar-section .title span').fadeIn();
    }
  
    function animateExpandandShowSection(section) {
      $('.sidebar').removeClass('sidebar-collapsed');
      $('.sidebar-section .title span').fadeIn();
      section.removeClass('collapsed')
       .find('.section-links').slideDown();
    }
  }
});
