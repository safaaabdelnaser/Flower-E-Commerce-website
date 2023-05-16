// $(function(){
//   $("#includedContent").load("file_A.html");
// });

$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "assets/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

// JavaScript code
function search_products() {
  let cards = document.querySelectorAll(".card2");
  let input = document.getElementById("search").value;
  input = input.toLowerCase();

  var httpRequestall = new XMLHttpRequest();
  httpRequestall.open("GET", "./products.json", true);
  httpRequestall.onreadystatechange = function () {
    if (httpRequestall.readyState == 4 && httpRequestall.status == 200) {
      var dataRes = httpRequestall.response;
      var dataAfterParse = JSON.parse(dataRes);

      for (var i = 0; i < cards.length; i++) {
        if (cards[i].innerText.toLowerCase().includes(input.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          cards[i].classList.remove("is-hidden");
          console.log(input);
        } else {
          // Otherwise, add the class.
          cards[i].classList.add("is-hidden");
        }
      }
    }
  };
  httpRequestall.send();
}

function search_products() {
  let cards = document.querySelectorAll(".card");
  let input = document.getElementById("form1").value;
  input = input.toLowerCase();

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase().includes(input.toLowerCase())) {
      // ...remove the `.is-hidden` class.
      cards[i].classList.remove("is-hidden");
      console.log(input);
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}
