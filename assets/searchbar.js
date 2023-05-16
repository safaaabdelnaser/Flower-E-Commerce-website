// JavaScript code
function search_products() {
  let cards = document.querySelectorAll(".cat-card");
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
