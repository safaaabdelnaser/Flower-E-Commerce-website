var cnt=0,start;
var imgs=[];
imgs[0]="/assets/imges/newslide.webp";
imgs[1]="/assets/imges/newslide2.png";
imgs[2]="/assets/imges/newslide3.jpg";
imgs[3]="/assets/imges/newslide4.jpg";
imgs[3]="/assets/imges/newslide5.webp";


function startslider(){
    start=setInterval(getimges,1500);
    //#
    document.getElementById("imgg").style.opacity=".8"


}
function stopint(){
    clearInterval(start);
    //#
    document.getElementById("imgg").style.opacity="1"

}
function getimges(){
    if(cnt<imgs.length){
    document.getElementById("imgg").src=imgs[cnt++];
    }else{
        cnt=0;
    }
}
function nextphoto(){
    if(cnt<imgs.length-1){
        document.getElementById("imgg").src=imgs[++cnt];
    }
    else{
        cnt=0;
        document.getElementById("imgg").src=imgs[++cnt];
    }
}
function prephoto(){
    if(cnt<imgs.length&&cnt!=0){
        document.getElementById("imgg").src=imgs[--cnt];
    }
    else{
        cnt=imgs.length;
        document.getElementById("imgg").src=imgs[--cnt];
    }
}