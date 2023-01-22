

//localStorage.setItem("userdata",JSON.stringify(u1));
localStorage.setItem("promoCodeApplied",false);
// localStorage.setItem("finalPrice",0);

//start cart
// let localCart = JSON.parse(localStorage.getItem("cart"));
// // localCart.forEach((item)=>{
// //     item.sku[0].quantity=1
// // });
// // console.log(localCart[0],"cartItem")
// localStorage.setItem("cart",JSON.stringify(localCart))


let id = localStorage.getItem("userId")


let checkOutBtn = document.getElementById("checkout-btn");
let shopMoreBtn =  document.getElementById("shopmore-btn");
//cart
let cartItemDiv  = document.querySelector(".cartItems");

//prev
 let overView  = document.querySelector("#overview");

//locally stored data
let LocalUserData = JSON.parse(localStorage.getItem("userData"))|[];
let userId = LocalUserData.id||2;
//let userName = LocalUserData.name|"No name in local storage";
let promoCodeDiv = document.getElementById("promocode");


//checkOutBtn
checkOutBtn.addEventListener("click",()=>{
    window.location.href ='./address.html';
});
//shopMoreBtn 
shopMoreBtn.addEventListener("click",()=>{
    window.location.href="./products.html";
});

//___________________________________________________________________________

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
         let br = document.createElement("br") ;
         let btndiv = document.createElement("div");
         btndiv.setAttribute("id", "button_div")
           let plusBtn = document.createElement("button");
           plusBtn.innerText="+";
           plusBtn.addEventListener("click",()=>{
            addcount(item)
           })
           let countDisplay =document.createElement("button");
           countDisplay.innerText = count; 
           let minusBtn =document.createElement("button");
           minusBtn.innerText= "-";
           minusBtn.addEventListener("click",()=>{
            reduceCount(item)
           })
        btndiv.append(plusBtn,countDisplay,minusBtn);
        let removeBtn = document.createElement("button");
        removeBtn.innerText="remove item"
        removeBtn.setAttribute("id","removeBtn");
        removeBtn.addEventListener("click",()=>{
             removeItem(index)
        })
        div2.append(h31,h32,br,btndiv,removeBtn);
        cartItem.append(div2)

        let div3 = document.createElement("div");
        div3.setAttribute("id","overview1")
        div3.innerHTML=`<h3>Price Details</h3>
        <div><h3>Original Price</h3><h3>&#8377; ${price}</h3></div>
        <div><h3>Discount</h3><h3>&#8377; ${discount}</h3></div>
        <hr>
        <div><h3>Final Price</h3><h2>&#8377; ${finalPrice}</h2></div>
        </hr>`
        cartItem.append(div3)

        





        cartItemDiv.append(cartItem)
    });
    overviewDisplay()
}
//addcount
//addcount
function addcount(a){
    let larr = JSON.parse(localStorage.getItem("cart"));
    //console.log(JSON.stringify(larr,null,2))
    larr.forEach((item,index)=>{
        if(item._id==a._id){
            item.sku[0].quantity++;
        }
    });
   
    //renderCardItems(larr)
    localStorage.setItem("cart",JSON.stringify(larr));
    displayCart(larr);
    
}

/// reduce count 

function reduceCount(a){
    let larr = JSON.parse(localStorage.getItem("cart"));
    //console.log(JSON.stringify(larr,null,2))
   larr.forEach((item,index)=>{
        if(item._id==a._id){
            item.sku[0].quantity--;
            if( item.sku[0].quantity <1){ item.sku[0].quantity=1}
        }
    });
    displayCart(larr);
    //renderCardItems(larr)
    localStorage.setItem("cart",JSON.stringify(larr))
}

function removeItem(index){
let larr = JSON.parse(localStorage.getItem("cart"));
larr.splice(index,1)


//renderCardItems(larr)
localStorage.setItem("cart",JSON.stringify(larr))
displayCart(larr);
}


//overview part start __________________________________________________

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



