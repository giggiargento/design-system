function copyToClipboard() {
  var copyText = document.getElementById("myCode").textContent;
  navigator.clipboard.writeText(copyText);
}
