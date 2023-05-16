var flg = 0, flg1 = 0, flg2 = 0;
var archive = [];
for (var i = 0; i < localStorage.length; i++) {
    archive[i] = localStorage.getItem(localStorage.key(i));
}
function confemail2() {
    mail = document.getElementById("mail").value;
        if(archive[2]==mail){
            flg1 = 1;
        }
        if (flg1 == 1) {
            document.getElementById("mail").style.border = "solid 2px green";

        } else {
            document.getElementById("mail").style.border = "solid 2px red";
        }
}
function conf2() {


    pas = document.getElementById("pass").value;
   
        if(archive[1]==pas){
            flg2 = 1;
        }
        if (flg2 == 1) {
            document.getElementById("pass").style.border = "solid 2px green";

        } else {
            document.getElementById("pass").style.border = "solid 2px red";
        }
}

function validation1() {
    if (flg1 == 0 || flg2 == 0) {
        document.getElementById("myForm1").addEventListener("submit", function (e) {
            e.preventDefault();
        })

    }
}


