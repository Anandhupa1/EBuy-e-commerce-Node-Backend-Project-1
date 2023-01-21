let baseUrl = 'http://localhost:4500'

setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 1000);




let form = document.getElementById("form");
form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let obj = {
        city : form.city.value,
        street : form.street.value,
        houseNumber : form.houseNo.value,
        pinCode : form.pin.value
    }
    
//fetch 
try{
    let res = await fetch(`${baseUrl}/users/register`, {
        method: 'PATCH',
        body: JSON.stringify({
            shippingAdress : obj
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
     if(res.ok){
         alert("address added successfully");
     }
     else {
        alert("res.ok !=true")
     }




}
catch(err){
alert("err : patch : address")    
    console.log(err)
}
    





})