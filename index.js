let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
      alert("you clicked h1");
});

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
      btn.classList.toggle("red");
});