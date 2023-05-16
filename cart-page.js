$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "assets/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

//******************remove*************************/
function reomveitem() {
  var delete_cart = document.getElementById("deletebox");
  delete_cart.remove();
}
//******************Price*************************/

/**********************Display content***********************/
var ln = localStorage.getItem("counter");
for (var i = 0; i <= ln; i++) {
  var temp = document.getElementById("flowertemp").content;
  var newcontent = document.importNode(temp, true);
  var parent1 = document.getElementById("shop1");
  var floname1 = localStorage.getItem("flowername" + i);
  newcontent.getElementById("floname").textContent = floname1;
  console.log(newcontent.getElementById("floname").innerHtml);

  newcontent
    .getElementById("floimge")
    .setAttribute("src", localStorage.getItem("imge" + i));
  newcontent.getElementById("prc").textContent = localStorage.getItem(
    "price" + i
  );
  newcontent.getElementById("qunt").value = localStorage.getItem("quntity" + i);

  parent1.appendChild(newcontent);
}
function totalprice() {
  var qun = document.getElementById("qunt").value;
  console.log(qun);
  res = qun * parseInt(document.getElementById("prc").textContent);
  document.getElementById("total").innerHTML = res + "$";
  var tot = res + 20 + 120;
  document.getElementById("total-price").innerText = tot + "$";
  console.log(res, tot);
}
///////////////////
