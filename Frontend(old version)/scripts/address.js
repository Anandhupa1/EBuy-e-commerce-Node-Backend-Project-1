let baseUrl = 'http://localhost:4500'

setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 1000);




let form = document.getElementById("form");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();

if(!form.city.value||!form.street.value|| !form.houseNo.value|| !form.pin.value){
    alert("enter all fields")
}
else{
    let obj = {
        city : form.city.value,
        street : form.street.value,
        houseNumber : form.houseNo.value,
        pinCode : form.pin.value
    }
    
//fetch 
try{
await localStorage.setItem("address", JSON.stringify(obj))
window.location.href='./shipping.html'


}
catch(err){
alert("err : patch : address")    
    console.log(err)
}
    



}

    


})