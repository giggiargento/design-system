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

// guardo lista de las secciones de cada para saber cuando activar el link en el top nav
//Brand
var brandPages = ['mission', 'personality', 'promise', 'values'];
//Foundations
var foundationsPages = ['grid', 'icons', 'typography', 'colors', 'illustrations'];
//Components
var componentsPages = ['buttons', 'calendar', 'cards', 'checkbox', 'dropdowns', 'forms', 'navigation', 'notifications', 'pagination', 'radio', 'select', 'sidesheet', 'switch', 'table', 'tabs', 'tags', 'tooltip'];
//Patterns
var patternsPages = ['emptyStates', 'forms', 'messages'];
//Resources
var resourcesPages = ['introduction', 'download', 'versions'];

function activateTopNavLink() {
  $('#topNav a.active').removeClass('active').removeAttr('aria-current');
    if (brandPages.find(page => location.pathname.includes(page))) {
      $('.nav-link.brand').addClass('active')
  }
  if (foundationsPages.find(page => location.pathname.includes(page))) {
    $('.nav-link.foundations').addClass('active')
  }
  if (componentsPages.find(page => location.pathname.includes(page))) {
      $('.nav-link.components').addClass('active')
  }
  if (patternsPages.find(page => location.pathname.includes(page))) {
    $('.nav-link.patterns').addClass('active')
  }
  if (resourcesPages.find(page => location.pathname.includes(page))) {
    $('.nav-link.resources').addClass('active')
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