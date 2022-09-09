function copyToClipboard(codeId) {
  var copyText = document.getElementById(codeId).textContent;
  navigator.clipboard.writeText(copyText);
  // busco el tooltip de copyBtn
  const tooltip = bootstrap.Tooltip.getInstance(`#${event.target.id}`)
  console.log(tooltip)
  // le cambio el texto
  tooltip.setContent({ '.tooltip-inner': 'Copied!' })
  // al ocultarlo, vuelvo a cambiar el texto al original

  //document.getElementById('copyBtn').addEventListener("hidden.bs.tooltip",function () {tooltip.setContent(
  //  {".tooltip-inner": 'Copy to clipboard'}
  //)})
  event.target.addEventListener("hidden.bs.tooltip",function () {tooltip.setContent(
    {".tooltip-inner": 'Copy to clipboard'}
  )})
}


//codeBox
//change btw show code and hide code
//function changeHideShowCode(event){
//  document.getElementById('showHideCode').innerText='Hide code';
//}

const micodigo = document.querySelector(".myCode");
const button = document.querySelector(".showHideCode");

button.addEventListener("click", showCode)

function showCode(){
  if (micodigo.className == "closed") {
    micodigo.className = "";
    button.textContent = "Show code"
  } else {
    micodigo.className = "closed";
    button.textContent = "Hide code"
  }
}

//codeBox code
//buttons
//primaryButtons

//function insertPrimaryButtonCode(){
//  document.getElementById('primaryButtonCode').innerText =
//`<button class="pbtn btn-primary">Label</button>
//
//<button class="pbtn btn-primary">
//<span class="material-icons">arrow_forward</span>Label
//</button>
//
//<button class="pbtn btn-primary btn-icon">
//<span class="material-icons">more_horiz</span>
//</button>
//
//<button class="pbtn btn-primary btn-disabled">Label</button>
//
//<button class="pbtn btn-primary btn-disabled">
//<span class="material-icons">arrow_forward</span>Label
//</button>
//
//<button class="pbtn btn-primary btn-icon btn-disabled">
//<span class="material-icons">more_horiz</span>
//</button>`
//;
//}
//
//window.addEventListener('DOMContentLoaded', function() {
//  insertPrimaryButtonCode();
//}, true);
//
//secondaryButtons
//function insertSecondaryButtonCode(){
//  document.getElementById('secondaryButtonCode').innerText =
//`<button class="pbtn btn-secondary">Label</button>
//
//<button class="pbtn btn-secondary">
//<span class="material-icons">arrow_forward</span>Label
//</button>
//
//<button class="pbtn btn-secondary btn-icon">
//<span class="material-icons">more_horiz</span>
//</button>
//
//<button class="pbtn btn-secondary btn-disabled">Label</button>
//
//<button class="pbtn btn-secondary btn-disabled">
//<span class="material-icons">arrow_forward</span>Label
//</button>
//
//<button class="pbtn btn-secondary btn-icon btn-disabled">
//<span class="material-icons">more_horiz</span>
//</button>`
//;
//}
//
//window.addEventListener('DOMContentLoaded', function() {
//  insertSecondaryButtonCode();
//}, true);
//
////errorButtons
//function insertErrorButtonCode(){
//  document.getElementById('errorButtonCode').innerText =
//`<button class="pbtn btn-red">Label</button>
//
//<button class="pbtn btn-red">
//<span class="material-icons">delete</span>Label
//</button>
//
//<button class="pbtn btn-red btn-icon">
//<span class="material-icons">delete</span>
//</button>
//
//<button class="pbtn btn-red btn-disabled">Label</button>
//
//<button class="pbtn btn-red btn-disabled">
//<span class="material-icons">delete</span>Label
//</button>
//
//<button class="pbtn btn-red btn-icon btn-disabled">
//<span class="material-icons">delete</span>
//</button>`
//;
//}
//
//window.addEventListener('DOMContentLoaded', function() {
//  insertErrorButtonCode();
//}, true);