let baseUrl = "https://jittery-erin-cockroach.cyclic.app"


//collapsible starts here
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//collapsible ends here


let localUserData = JSON.parse(localStorage.getItem("userdata"));
let id = localStorage.getItem("userId")
let cartItemDiv = document.querySelector("#shippingCart")

let overView  = document.querySelector("#overview");

//**********************overview part*********** */




overviewDisplay()
function overviewDisplay(){
let cart = JSON.parse(localStorage.getItem("cart"));
//console.log(JSON.stringify(cart,null,5));
let price =0;
let discount =0;

cart.forEach((item)=>{
    price+= item.sku[0].price*item.sku[0].quantity;
    discount += item.sku[0].discount*item.sku[0].quantity;
   
})

overView.innerHTML=`<h1>Payment Details</h1>
       
<div><h3>subtotal</h3><h3>${price}</h3></div>
<div><h3>GST</h2><h3>${discount}</h3></div>
<div><h3>Delivery Charges</h3><h3>Free</h2></div>

<hr>
<div><h2>total</h2><h2>${price-discount}</h2></div>`;




}



//payment part ebuy;
let address = JSON.parse(localStorage.getItem("address"));

//adress display
let addressdiv = document.getElementById("deliveryAddress");
let dis = Object.values(address).join(', ');
addressdiv.innerText=dis;


//place order
let placeOrderbtndummy = document.getElementById('checkout-btn')

placeOrderbtndummy.addEventListener("click",()=>{
  alert("please complete payment!!!!!!!")
})


//order placing request 





async function OrderPlace(){
  
//__________part one collecting data
let larr = JSON.parse( localStorage.getItem("cart"));
let price = 0;
let discount =0;
larr.forEach((item)=>{
  price+=item.sku[0].price;
  discount+=item.sku[0].discount;
})
let fp = price -discount



  let orderObj = {
    paymentStatus:false,
    status:"packing",
    amount:fp,
    items:JSON.parse(localStorage.getItem("cart")),
    shippingAddress:JSON.parse(localStorage.getItem("address")),

  
  }

//console.log(JSON.stringify(orderObj,null,4))
//_____________part 2 making request

 let res  = await fetch(`${baseUrl}/orders`, {
   method: 'POST',
   body: JSON.stringify(orderObj),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
     'authToken' : localStorage.getItem("authToken")
   },
 })
if(res.ok){
  clearCart()
window.location.href = "./orderSuccess.html"
}
else{
  alert("something went wrong/ res.status != ok")
}




}

// payon delivery order placing

let forms = document.querySelectorAll("form")
forms.forEach((item)=>{
  item.addEventListener("click",(event)=>{
    event.preventDefault();
  })
})


let payOnDelBtn = document.getElementById("payOnDelBtn");
payOnDelBtn.addEventListener("click",()=>{
  OrderPlace();
})






//disable all other payment methods
let paymentBtn = document.getElementById('pay');
paymentBtn.addEventListener("click",()=>{
  alert("Due to some technical isuues we are only supporting pay on delivery!!!!!!!!!")
})


//************************************************** */
///form submission





function clearCart(){
  let larr = JSON.parse(localStorage.getItem("cart"));
  
  
  //***************************** */
 larr = null;
 //***************************** */

  localStorage.setItem("cart",JSON.stringify(larr))
  
}

let shippingBtn = document.querySelector(".shipping-btn");
shippingBtn.addEventListener("click",()=>{
  window.location.href ="./shipping.html";
})




