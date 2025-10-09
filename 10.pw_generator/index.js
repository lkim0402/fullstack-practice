let pw1;
let pw2;
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");

let length = 12;
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*<>?";

function generate() {
  pw1 = generatePw();
  pw2 = generatePw();
  password1El.textContent = pw1;
  password2El.textContent = pw2;
}

function generatePw() {
  let pw = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    pw += charset.charAt(randomIndex);
  }
  return pw;
}

function copyToClipboard(copyText) {
  let pw = "";
  if (copyText === "password1") {
    pw = password1El.textContent;
  } else {
    pw = password2El.textContent;
  }
  navigator.clipboard.writeText(pw);
  console.log("Copied: " + pw);
  alert("Copied: " + pw + "!");
}
