function showcategory()
{
        // calling JSON file
        var httpRequestall = new XMLHttpRequest();
        httpRequestall.open("GET","/assets/products.json", true);
        httpRequestall.onreadystatechange = function () {
        if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
         {
             var dataRes=httpRequestall.response;
             var dataAfterParse=JSON.parse(dataRes);
             for(var i=0; i<4;i++)
             {
               
                      var temp =document.getElementById('cardtemp1').content
                        var newcontent =document.importNode(temp,true)
                        newcontent.getElementById('cat1').textContent=dataAfterParse[i].category
                        var proimg =newcontent.getElementById('pro_img1')
                        proimg.setAttribute('src',dataAfterParse[i].prod_image.img1);
                    
                    document.getElementById('featured_container1').appendChild(newcontent)
                  
              
                
            }
            // console.log(dataAfterParse);
    
        }
    }
    httpRequestall.send();
}
function displayproduct(ctrl){
        var httpRequestall = new XMLHttpRequest();
        httpRequestall.open("GET","/assets/products.json", true);
        var TextInsideLi = ctrl.getElementsByTagName('p')[0].textContent;
        httpRequestall.onreadystatechange = function () {
        if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
         {      
                var dataRes=httpRequestall.response;
                var dataAfterParse=JSON.parse(dataRes);
            for(var i=0; i<dataAfterParse.length;i++)
            {
                if(dataAfterParse[i].category== TextInsideLi)
               {
               // console.log(dataAfterParse[i].prod_name);
                window.location.href =`showproduct.html?category=${dataAfterParse[i].category}`;
           
               }
            
            }
            // console.log(dataAfterParse);
    
        }
    }
    httpRequestall.send();
}
// JavaScript code
function search_products() {
  let cards = document.querySelectorAll('.card2');
	let input = document.getElementById('search').value;
	input=input.toLowerCase();

	var httpRequestall = new XMLHttpRequest();
        httpRequestall.open("GET","./products.json", true);
        httpRequestall.onreadystatechange = function () {
        if (httpRequestall.readyState == 4 && httpRequestall.status == 200)
         {
                var dataRes=httpRequestall.response;
                var dataAfterParse=JSON.parse(dataRes);

          for (var i = 0; i < cards.length; i++) {
            if(cards[i].innerText.toLowerCase().includes(input.toLowerCase())) {
              // ...remove the `.is-hidden` class.
              cards[i].classList.remove("is-hidden");
              console.log(input);
              
          } else {
            // Otherwise, add the class.
            cards[i].classList.add("is-hidden");
          }

          //   }
        }
    
        }
    }
    httpRequestall.send();
	

}

