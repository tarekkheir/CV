// Display close Holberton Overlay
function on_holberton() {
  document.getElementById("overlay-holberton").style.display = "block";
}
function off_holberton() {
  document.getElementById("overlay-holberton").style.display = "none";
}

// Display close Upec Overlay
function on_upec() {
  document.getElementById("overlay-upec").style.display = "block";
}
function off_upec() {
  document.getElementById("overlay-upec").style.display = "none";
}

// Display close Champlain Overlay
function on_champlain() {
  document.getElementById("overlay-champlain").style.display = "block";
}
function off_champlain() {
  document.getElementById("overlay-champlain").style.display = "none";
}


// Copy paste function for email
function copyText() {
  console.log("enter");
  let textToCopy = document.getElementById('mailToCopy');
  let textArea = document.createElement("textarea");
  textArea.value = textToCopy.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  document.getElementById('check').style.display = "block";
}
