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
document.querySelectorAll(".showHideCode").forEach(btn => btn.addEventListener("click", showCode))

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
var componentsPages = ['buttons', 'calendar', 'cards', 'checkbox', 'dropdowns', 'componentsForms', 'navigation', 'notifications', 'pagination', 'radio', 'select', 'sidesheet', 'switch', 'table', 'tabs', 'tags', 'tooltip'];
//Patterns
var patternsPages = ['emptyStates', 'patternsForms', 'messages'];
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

// Notifications onclick
function successToast(){
  $.bukealaNotify({
    icon: 'success-icon',
    title: 'Success message.',
    delay: 3000
  });
}

function successDescriptiveToast(){
  $.bukealaNotify({
    icon: 'success-icon',
    title: 'Success message.',
    message: 'This message appears as a successful message for the action you did.',
    delay: 3000
  });
}

function infoToast(){
  $.bukealaNotify({
    icon: 'info-icon',
    title: 'Info message.',
    delay: 3000
  });
}

function infoDescriptiveToast(){
  $.bukealaNotify({
    icon: 'info-icon',
    title: 'Info message.',
    message: 'This message provides information about what you need to do or indicates something you need to know about.',
    delay: 3000
  });
}

function warningToast(){
  $.bukealaNotify({
    icon: 'warning-icon',
    title: 'Warning message.',
    message: '',
    delay: 3000
  });
}

function warningDescriptiveToast(){
  $.bukealaNotify({
    icon: 'warning-icon',
    title: 'Warning message.',
    message: 'This is a warning message toast. Provides information about something you are going to do or change.',
    delay: 3000
  });
}

function errorToast(){
  $.bukealaNotify({
    icon: 'error-icon',
    title: 'Error message.',
    delay: 3000
  });
}

function errorDescriptiveToast(){
  $.bukealaNotify({
    icon: 'error-icon',
    title: 'Error message.',
    message: 'An error message toast provides users know that something has gone wrong after they\'ve tried to do something.',
    delay: 3000
  });
}

function saveAlert(){
  $.bukealaNotify({
    icon: 'save-icon',
    title: 'Are you sure to exit before save?',
    message: 'This message provides a question before you take action about something that later you are going to do.',
    delay: 0,
    action1: { onclick: "", name: 'Save', closeOnClick: false},
    action2: { onclick: "", name: 'Cancel', closeOnClick: true},
  });
}

function deleteAlert(){
  $.bukealaNotify({
    icon: 'delete-icon',
    title: 'Are you sure you want to delete this?',
    message: 'This message provides a question before you take action about something that later you won’t be able to undo.',
    delay: 0,
    action1: {onclick: "", name: 'Delete', closeOnClick: false},
    action2: {onclick: "", name: 'Cancel', closeOnClick: true},
  });
}

// Sidesheet onclick
function formSidesheet(){
  $('#sideSheetFormExample').removeClass('hide');
}

function onlyContentSidesheet(){
  $('#sideSheetContentExample').removeClass('hide');
}