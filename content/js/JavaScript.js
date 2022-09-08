function copyToClipboard(event) {
  var copyText = document.getElementById("myCode").textContent;
  navigator.clipboard.writeText(copyText);
  
  // busco el tooltip de copyBtn
  const tooltip = bootstrap.Tooltip.getInstance(`#${event.target.id}`)
  // le cambio el texto
  tooltip.setContent({ '.tooltip-inner': 'Copied!' })
  // al ocultarlo, vuelvo a cambiar el texto al original
  document.getElementById('copyBtn').addEventListener("hidden.bs.tooltip",function () {tooltip.setContent(
    {".tooltip-inner": 'Copy to clipboard'}
  )})
}
