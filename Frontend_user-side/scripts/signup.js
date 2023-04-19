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
      password : form.pw.value,
      cpassword  :form.cpw.value,
      userName : form.name.value
    }
    console.log(obj)

    let res = await fetch(`${baseUrl}/users/register`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if(res.ok){
      let data = await res.json();
      let authToken = data.authToken;
      sessionStorage.setItem("authToken", authToken);
      alert("registered succesfully");
      window.location.href = "./login.html";
    }
    else {
     if(res.status==409){
        alert("user already exists, login please");
        window.location.href = "./login.html";
    }
     else if(res.status==401){alert(" password not matching")}
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



  