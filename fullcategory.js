$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '/assets/' + $(this).data('include') + '.html'
      $(this).load(file)
    })  
  })


    var url = new URL(window.location.href)
    console.log(url)
    //then i want to remove all unnecessary
    console.log(url.search)
    var urlparams = new URLSearchParams(url.search)
    var categoryname = urlparams.get('category')

    // calling JSON file
    var allcategory = new XMLHttpRequest();
    allcategory.open("GET","./assets/products.json", true);
    allcategory.onreadystatechange = function () {
    if (allcategory.readyState == 4 && allcategory.status == 200)
     {
            var dataRes=allcategory.response;
            var dataAfterParse=JSON.parse(dataRes);
        for(var i=0; i<dataAfterParse.length ;i++)
        {
            if(dataAfterParse[i].category==categoryname){
          console.log(dataAfterParse[i])
                  var temp =document.getElementById('cardtemp').content
                    var newcontent =document.importNode(temp,true)
                   var pid = newcontent.getElementById('pid')
                    pid.setAttribute('value',dataAfterParse[i].prod_id);
                    newcontent.getElementById('pro_name').textContent=dataAfterParse[i].prod_name
                    newcontent.getElementById('pro_desc').textContent=dataAfterParse[i].prod_description
                    newcontent.getElementById('pro_price').textContent=dataAfterParse[i].prod_price+" .EGP"
                    newcontent.getElementById('catigory').textContent=dataAfterParse[i].category
                    var proimg =newcontent.getElementById('pro_img')
                    proimg.setAttribute('src',dataAfterParse[i].prod_image.img1);
                    // newcontent.getElementById('pro_name').textContent=dataAfterParse[i].


                document.getElementById('category-products').appendChild(newcontent)

          
            }
        }
        // console.log(dataAfterParse);

    }
}
allcategory.send();
  
