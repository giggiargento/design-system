function copyToClipboard(codeId) {
  var copyText = document.getElementById(codeId).textContent;
  navigator.clipboard.writeText(copyText);
  // busco el tooltip de copyBtn
  const tooltip = bootstrap.Tooltip.getInstance(`#${event.target.id}`)
  console.log(tooltip)
  // le cambio el texto
  tooltip.setContent({ '.tooltip-inner': 'Copied!' })
  // al ocultarlo, vuelvo a cambiar el texto al original
  event.target.addEventListener("hidden.bs.tooltip",function () {tooltip.setContent(
    {".tooltip-inner": 'Copy to clipboard'}
  )})
}


//codeBox
const button = document.querySelectorAll(".showHideCode");

button.forEach(btn => btn.addEventListener("click", showCode))

function showCode() {
  let btn = event.target
  btn.classList.toggle('closed');
  if (btn.classList.contains("closed")) {
    btn.textContent = "Show code"
  } else {
    btn.textContent = "Hide code"
  }
}

// guardo esta lista de páginas de componentes para saber cuándo activar el link components en el top nav
var componentPages = ['buttons', 'calendar', 'cards', 'checkbox', 'dropdowns', 'forms', 'navigation', 'notifications', 'pagination', 'radio', 'select', 'sidesheet', 'switch', 'table', 'tabs', 'tags', 'tooltip'];

function activateTopNavLink() {
  $('#topNav a.active').removeClass('active').removeAttr('aria-current');
  if (componentPages.find(page => location.pathname.includes(page))) {
      $('.nav-link.components').addClass('active')
  }

  else {
    $('#topNav a[href="' + location.pathname + '"]').addClass('active').attr('aria-current', 'page'); 
  }
}

//Nav links active
function activateSideNavLink() {
  $('.sidenav a.active').removeClass('active').removeAttr('aria-current');
  $('.sidenav a[href="' + location.pathname + '"]').addClass('active').attr('aria-current', 'page'); 
}; 