var username, reg, reg1, pas, pas1;
var flg1 = 0;

function focusfun() {
  document.getElementById("nm").style.border = "solid 2px blue";
}
function blurefun() {
  document.getElementById("nm").removeAttribute("border");
  username = document.getElementById("nm").value;
  reg = /[a-zA-Z]\s[a-zA-Z][a-zA-Z]/;
  if (reg.test(username) == true) {
    document.getElementById("nm").style.border = " solid 2px green";
    flg1 = 1;
  } else {
    document.getElementById("nm").style.border = "solid 2px red";
    //document.getElementById("message")="please enter number Upper and lower case letter";
    flg1 = 0;
  }
}

function confemail() {
  reg1 = /^([A-Za-z]{3,})@(gmail|outlock)(.com|.net|.edu)$/;

  mail = document.getElementById("mail").value;
  if (reg1.test(mail) == true) {
    document.getElementById("mail").style.border = " solid 2px green";
    flg1 = 1;
  } else {
    document.getElementById("mail").style.border = "solid 2px red";
    flg1 = 0;
  }
}

function conf() {
  reg1 = /[a-zA-Z]+[~!@#$%^&*() ]/;
  pas = document.getElementById("pass").value;
  if (reg1.test(pas) == true) {
    document.getElementById("pass").style.border = " solid 2px green";
  } else {
    document.getElementById("pass").style.border = "solid 2px red";
  }
}

function conf1() {
  pas1 = document.getElementById("pas").value;
  var ch = document.getElementById("pass").value;
  if (pas1 != ch) {
    document.getElementById("pas").style.border = "solid 2px red";
  } else {
    document.getElementById("pas").style.border = "solid 2px green";
  }
}

function validation() {
  var flg = 1;
  var elm = document.getElementsByTagName("input");
  if (pas1.value != pas.value) {
    flg = 0;
    console.log(flg);
    console.log(pas1, pas);
  }

  if (flg == 0 || flg1 == 0) {
    console.log(flg, "3");
    document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault();
    });
  } else {
    rememberme();
  }
}

function rememberme() {
  localStorage.setItem("username", document.getElementById("nm").value);
  localStorage.setItem("mail", document.getElementById("mail").value);
  localStorage.setItem("password", document.getElementById("pas").value);
}
