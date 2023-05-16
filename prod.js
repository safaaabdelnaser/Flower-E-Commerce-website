/**********************for embeding header and footer ***********************/
$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "assets/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

/****************************************************************************/

var number = document.getElementById("number");
var orderTotal = document.getElementById("order-total");
var prodPrice = document.getElementById("prod-price");

number.onchange = function () {
  // orderTotal.style="color:#2b3a55;font-weight:bold"
  var res = number.value * document.getElementById("prod-price").innerText;
  orderTotal.innerText = res;
};
/**********************Getting product ID from url***********************/

// first i want to store the url in a variable
var url = new URL(window.location.href);
console.log(url);
//then i want to remove all unnecessary
console.log(url.search);
var urlparams = new URLSearchParams(url.search);
//then getting my values throw the input name as key
var pid = urlparams.get("pid");
console.log(`Product ID is : ${pid}`);

/******************connecting with products json file**********************/
var httpRequestall = new XMLHttpRequest();
httpRequestall.open("GET", "/assets/products.json", true);
httpRequestall.onreadystatechange = function () {
  if (httpRequestall.readyState == 4 && httpRequestall.status == 200) {
    var dataRes = httpRequestall.response;
    var dataAfterParse = JSON.parse(dataRes);
    for (var i = 0; i < dataAfterParse.length; i++) {
      if (dataAfterParse[i].prod_id == pid) {
        /******************display Product data**********************/
        document.getElementById("prodname").innerText =
          dataAfterParse[i].prod_name;
        document.getElementById("prod-desc").innerText =
          dataAfterParse[i].prod_description;
        document.getElementById("prod-category").innerText =
          dataAfterParse[i].category;
        document.getElementById("prod-price").innerText =
          dataAfterParse[i].prod_price;
        var res =
          number.value * document.getElementById("prod-price").innerText;
        orderTotal.innerText = res;

        /******************display imgs**********************/
        document
          .getElementById("img1")
          .setAttribute("src", dataAfterParse[i].prod_image.img1);
        document
          .getElementsByClassName("img")[0]
          .setAttribute("src", dataAfterParse[i].prod_image.img1);
        document
          .getElementsByClassName("img")[1]
          .setAttribute("src", dataAfterParse[i].prod_image.img2);
        document
          .getElementsByClassName("img")[2]
          .setAttribute("src", dataAfterParse[i].prod_image.img3);

        console.log(dataAfterParse[i]);
      }
    }
  }
};
httpRequestall.send();

/****************************************/
//display img

var dispalyImg = document.getElementById("img1");
var selectImg1 = document.getElementsByClassName("img")[0];
var selectImg2 = document.getElementsByClassName("img")[1];
var selectImg3 = document.getElementsByClassName("img")[2];

// console.log(dispalyImg);

selectImg1.addEventListener("click", function () {
  dispalyImg.src = selectImg1.src;
});

selectImg2.addEventListener("click", function () {
  dispalyImg.src = selectImg2.src;
});

selectImg3.addEventListener("click", function () {
  dispalyImg.src = selectImg3.src;
});

function addtocart() {
  var prodname = document.getElementById("prodname");
  var price = document.getElementById("prod-price");
  var number = document.getElementById("number");
  var img1 = document.getElementById("img1");

  if (localStorage.getItem("counter") === null) {
    localStorage.setItem("counter", 0);
    localStorage.setItem("flowername" + 0, prodname.innerText);
    localStorage.setItem("price" + 0, price.innerText);
    localStorage.setItem("quntity" + 0, number.value);
    localStorage.setItem("imge" + 0, img1.src);
    console.log(cnt);
  } else {
    var cnt = localStorage.getItem("counter");

    for (let i = 0; i <= cnt; i++) {
      console.log(cnt, i);
      if (prodname.innerText == localStorage.getItem("flowername" + i)) {
        // var priceres =
        //   parseInt(price.innerText) +
        //   parseInt(localStorage.getItem("price" + i));
        // localStorage.setItem("price" + i, priceres);

        var quneres =
          parseInt(number.value) +
          parseInt(localStorage.getItem("quntity" + i));
        localStorage.setItem("quntity" + i, quneres);

        console.log("item updated", res, quneres);
      } else {
        cnt++;
        localStorage.setItem("counter", cnt);
        localStorage.setItem("flowername" + cnt, prodname.innerText);
        localStorage.setItem("price" + cnt, price.innerText);
        localStorage.setItem("quntity" + cnt, number.value);
        localStorage.setItem("imge" + cnt, img1.src);
        console.log(cnt);
        break;
      }
    }
  }
}
