let baseUrl = 'https://jittery-erin-cockroach.cyclic.app'

setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 1000);


let form = document.getElementById("form");
form.addEventListener("submit", async (event)=>{
  event.preventDefault();
  try{
    let obj = {
      email : form.email.value,
      password : form.password.value
    }

    let res = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if(res.ok){
      let data = await res.json();
      let authToken = data.authToken;
      localStorage.setItem("authToken", authToken);
      alert("login successfull");
      window.location.href = "./index.html";
    }
    else {
     if(res.status==404){alert("user doesn't exists, register please")}
     else if(res.status==401){alert("wrong password")}
    }





  }
  catch(err){
    console.log("______error :post : login");
    console.log(err);
  }

})



function modalDisplay(message,imgUrl,button){
  let p = document.getElementById("modalMsg");
  let img = document.getElementById("modalImg")
}



  