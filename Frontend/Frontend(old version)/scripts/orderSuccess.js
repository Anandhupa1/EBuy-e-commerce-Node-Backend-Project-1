setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 1000);



//   let continueBtn = document.querySelector("#continue");
//   continueBtn.addEventListener("click",()=>{
//     window.location.href='./index.html';

//   })

let form = document.querySelector("form");
form.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./index.html"
})
