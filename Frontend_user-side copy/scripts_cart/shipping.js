//localStorage.setItem("userdata",JSON.stringify(u1));
localStorage.setItem("promoCodeApplied",false);
// localStorage.setItem("finalPrice",0);

//start cart
let localUserData = JSON.parse(localStorage.getItem("userdata"));
//console.log("localuserData", localUserData)
let id = localStorage.getItem("userId")
let cartItemDiv = document.querySelector("#shippingCart")

let overView  = document.querySelector("#overview");
/////////***********************bag and continue buttons */
let editBagBtn = document.getElementById("shopmore-btn");

editBagBtn.addEventListener("click", ()=>{
    window.location.href ="./cart.html";
})

let continueBtn = document.querySelector("#checkout-btn")
continueBtn.addEventListener("click",()=>{
    window.location.href ="./payment.html";
})
//******************************************** */
///main part starts


let cartItems = JSON.parse(localStorage.getItem("cart"));
console.log(JSON.stringify(cartItems,null,3))
displayCart(cartItems)





function displayCart(arr){
    cartItemDiv.innerHTML= null;
    
    arr.forEach((item,index) => {
           let id = item.id;
           let name = item.name;
           let category = item.category;
           let count =item.sku[0].quantity;
           let price = item.sku[0].price*count ;
           let image = item.sku[0].image;
           let discount = item.sku[0].discount*count;
           let finalPrice = price - discount;
     
        //creation starts here 
        let cartItem=document.createElement("div");
        cartItem.setAttribute("id","cartItem");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",image)
        div1.append(img);
        cartItem.append(div1);

        let div2 = document.createElement("div");
         let h31 = document.createElement("h3");
         h31.innerText=name;
         let h32 = document.createElement("h3");
         h32.innerText=category;
         h32.style.color="#777272"
         let br = document.createElement("br") ;
         
        
           
        div2.append(h31,h32,br);
        cartItem.append(div2)



        let div3 = document.createElement("div");
        div3.setAttribute("id","overview1")
        div3.innerHTML=` <h3><i class="fa-solid fa-truck"></i></h3>
               
        <div><h3> <i class="fa-regular fa-circle-dot"></i>Delivery within 3 - 7 days</h3></div>
       
        `
        cartItem.append(div3)

        





        cartItemDiv.append(cartItem)
    });

    overviewDisplay()
}


// overview 



overviewDisplay()
function overviewDisplay(){
let cart = JSON.parse(localStorage.getItem("cart"));
console.log(JSON.stringify(cart,null,5));
let price =0;
let discount =0;

cart.forEach((item)=>{
    price+= item.sku[0].price*item.sku[0].quantity;
    discount += item.sku[0].discount*item.sku[0].quantity;
   
})

overView.innerHTML=`<h1>Info</h1>
       
<div><h3>subtotal</h3><h3>${price}</h3></div>
<div><h3>GST</h2><h3>${discount}</h3></div>
<div><h3>Delivery Charges</h3><h3>Free</h2></div>

<hr>
<div><h2>total</h2><h2>${price-discount}</h2></div>`;




}











///main part ends

let paymentBtn = document.querySelector(".payment-btn");
paymentBtn.addEventListener("click",()=>{
  window.location.href ="./payment.html";
})

