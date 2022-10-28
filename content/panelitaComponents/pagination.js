$(document).ready(function() {
  if ($('.auto-paginate').length > 0) {
    initAutoPaginate();
  }
});

function initAutoPaginate() {
  let currentPage, lastPage;
  currentPage = 1;
  lastPage = $('.auto-paginate.auto-paginate').attr('data-max');

  drawTemplate();

  $('.auto-paginate .pag-num-btn').on('click', function() {
    let btn = $(this);
    btn.addClass('active');
    $('.pag-num-btn').not(btn).removeClass('active');
    currentPage = parseInt(btn.attr('data-page'));
    $('.auto-paginate').trigger('pagechange')
  })

  function goToPrevPage() {
    currentPage -= 1;
    $('.auto-paginate').trigger('pagechange')
  }

  function goToNextPage() {
    currentPage += 1;
    console.log(currentPage)
    $('.auto-paginate').trigger('pagechange')
  }

  $(document).on('click', '.auto-paginate .pag-btn-prev:not(.disabled)', goToPrevPage);
  $(document).on('click', '.auto-paginate .pag-btn-next:not(.disabled)', goToNextPage);

  $('.auto-paginate').on('pagechange', function() {
    assignBtnState();
  });

  function drawTemplate() {
    $('.auto-paginate').append(`
      <button class="pbtn btn-icon pag-btn pag-btn-prev" title="Previous page">
        <span class="icon-container material-symbols-outlined">chevron_left</span>
      </button>
      <div class="pag-numbers">
      </div>
      <button class="pbtn btn-icon pag-btn pag-btn-next" title="Next page">
        <span class="icon-container material-symbols-outlined">chevron_right</span>
      </button>
    `)

    drawButtons();
  }

  function drawButtons() {
    for (i = 1; i <= lastPage; i++) {
      $('.pag-numbers').append(`
        <button class="pbtn pag-btn pag-num-btn" data-page="${i}" title="Page ${i}">${i}</button>
      `)
    }
    
    assignBtnState();
  }

  function assignBtnState() {
    $('.auto-paginate .pag-num-btn').removeClass('active');
    $(`.auto-paginate .pag-num-btn[data-page='${currentPage}']`).addClass('active');

    if (currentPage == 1) {
      $('.auto-paginate .pag-btn-prev').addClass('disabled');
      $('.auto-paginate .pag-btn-next').removeClass('disabled');
    }

    else if (currentPage == lastPage) {
      $('.auto-paginate .pag-btn-next').addClass('disabled');
    }

    else {
      $('.auto-paginate .pag-btn-prev, .auto-paginate .pag-btn-next').removeClass('disabled');
    }
  }
}