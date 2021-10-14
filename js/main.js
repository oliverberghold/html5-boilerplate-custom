const elementClicked = document.querySelector(".klick-this");
const elementYouWantToShow = document.querySelector(".desired-selector");

elementClicked.addEventListener("click", ()=>{
  elementYouWantToShow.classList.toggle("class-to-toggle");
});
