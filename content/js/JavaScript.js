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

//Nav links active
$(document).ready(function() {
  $('a.active').removeClass('active').removeAttr('aria-current');
  $('a[href="' + location.pathname + '"]').closest('a').addClass('active').attr('aria-current', 'page'); 
});