document.querySelectorAll(".button-group").forEach((group) => {
  group.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
      group.querySelector(".option.active").classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
