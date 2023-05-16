//init form elements
var btn = document.getElementById('sendbtn')
var fname = document.getElementById('name')
var mail = document.getElementById('mail')
var phone = document.getElementById('phone')
var message = document.getElementById('message')
//event listner
btn.addEventListener("click",send);
fname.addEventListener("mouseover",fieldover)
mail.addEventListener("mouseover",fieldover)
phone.addEventListener("mouseover",fieldover)
message.addEventListener("mouseover",fieldover)
 //on mouse out 
fname.addEventListener("mouseout",fieldout)
mail.addEventListener("mouseout",fieldout)
phone.addEventListener("mouseout",fieldout)
message.addEventListener("mouseout",fieldout)


//what send should do
function send(){

    

    var mailpattern =new RegExp();
    mailpattern = /^[a-z0-9]+@[a-z]+\.[a-z0-9]/;

            
        if( mailpattern.test(mail.value)) {
        

            mail.style.border="2px solid rgba(0, 0, 0, 0);"
            console.log("correct!,message sent.!")
            console.log(mail.value)
            
        }
        else{
            mail.style.borderColor="red"
           
            console.log("wrong data enterd!")
        }

}


function fieldover(){
    this.style.opacity="1"
    this.style.width="100%"
    this.focus
}

function fieldout(){
    this.style.opacity=".7"
    this.style.width="80%"

}

