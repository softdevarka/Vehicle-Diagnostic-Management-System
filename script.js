const form = document.querySelector("form"),
  nextBtn = document.querySelector(".nextBtn"),
  backBtn = document.querySelector(".backBtn"),
  all = document.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));
