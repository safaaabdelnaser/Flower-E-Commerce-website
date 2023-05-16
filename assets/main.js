   function displayalldata() {

    var httpRequestall = new XMLHttpRequest();
    httpRequestall.open("GET","./products.json", true);
    httpRequestall.onreadystatechange = function () {
    if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
     {
            var dataRes=httpRequestall.response;
            var dataAfterParse=JSON.parse(dataRes);
        for(var i=0; i<dataAfterParse.length;i++)
        {
            document.getElementById("mydiv").innerHTML="flower id: "+dataAfterParse[i].prod_id + "<br><br> flower name: "+dataAfterParse[i].prod_name+"<br><br> category:"+dataAfterParse[i].category+"<br><br> flower description: "+dataAfterParse[i].prod_description +"<br><br> flower price:"+dataAfterParse[i].prod_price+"<br><br> quantity:"+dataAfterParse[i].prod_quantity;
            //to show images
            document.getElementById("img1").innerHTML= " <br>image:<img src="+" ' "+dataAfterParse[i].prod_image.img1+" 'width=150 height=150><br>";
            document.getElementById("img2").innerHTML= " <br>image:<img src="+" ' "+dataAfterParse[i].prod_image.img2+" 'width=150 height=150><br>";
            document.getElementById("img3").innerHTML= " <br>image:<img src="+" ' "+dataAfterParse[i].prod_image.img3+" 'width=150 height=150><br>";
            
        }
           console.log(dataAfterParse);
          
    }
    }
    httpRequestall.send();
}
