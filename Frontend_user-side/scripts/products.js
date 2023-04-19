// setTimeout(function () {
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelector(".container").style.display = "block";
//   }, 1000);

let baseUrl = "https://jittery-erin-cockroach.cyclic.app"

  async function getProducts(){
    let res = await fetch(`${baseUrl}/products`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
if(res.ok){
    let data = await res.json();
    //console.log(JSON.stringify(data[0],null,2));
    ///////////////////////////////////////////////////////////////
    
    displayProducts(data);
    subcategoryDisplay(data);
    
    



    ///////////////////////////////////////////////////////////////
    //search funcionality
    search(data)
 
}
else{alert("error:res.ok!=true")}

  }

getProducts()



// <div>
//     <img src="https://images.dailyobjects.com/marche/product-images/1201/all-mustard-pedal-daypack-images/All-Mustard-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-494,h-538,dpr-1" alt="">
//     <h2>projdcim nostrum ea temporibus!</h2>
//     <p>Lorem ips</p>
//     <h3>Price : $45464</h3>
//     <h2>discount : $8746</h2>
//     <button>add to cart</button>
// </div>


function displayProducts(arr){
    let productDiv= document.getElementById('products');
    productDiv.innerHTML=null;
    arr.forEach((item,index)=>{
    
    let maindiv = document.createElement("div");
    let img = document.createElement('img');
    img.setAttribute("src",item.sku[0].image);
    let h21 = document.createElement('h2');
    h21.innerText=item.name;
    let des = document.createElement('p');
    des.innerText=item.des;
    let price = document.createElement('h3');
    price.innerText= `price : $ ${item.sku[0].price}`;
    let discount = document.createElement('h2');
    discount.innerText= `discount : $ ${item.sku[0].price}`;
    let btn = document.createElement('button');
    btn.innerText='add to cart';
    btn.addEventListener("click",()=>{
        addToCart(item)
    })
  
maindiv.append(img,h21,des,price,discount,btn)
productDiv.append(maindiv)



   })
}

// {/* <div>
//     <div class="brand">
//         <img src="https://images.dailyobjects.com/marche/assets/images/other/pedal-daypack-up.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1" alt="">
//     </div>
//     <h3>lskdjf</h3>
// </div> */}




function subcategoryDisplay(arr){
    let subcatDiv = document.getElementById('brandContainer');
    subcatDiv.innerHTML=null;
    let obj = {}
    arr.forEach((item)=>{
      let category = item.subCategory;
      let img = item.subCategoryImg;
      if(obj[category]==undefined){obj[category]=img}
    });
     //obj part done
for(let category in obj){
    let maindiv = document.createElement('div');
    let div1 = document.createElement('div');
     div1.setAttribute("class","brand");
      let img = document.createElement('img');
        img.setAttribute("src", obj[category] );
      div1.append(img);
    let h3 = document.createElement('h3');
    h3.innerText= category;
maindiv.append(div1,h3);
maindiv.addEventListener('click',()=>{
//?????????????
filterByCategory(category,arr)
});
subcatDiv.append(maindiv);
}  
}

function filterByCategory(x,arr){

let filteredData = arr.filter((item)=>{
    return item.subCategory==x;
})
displayProducts(filteredData)
//alert(JSON.stringify(arr))
}





function addToCart(item){

let authToken = localStorage.getItem("authToken");
if(!authToken){
  alert("login please")
  window.location.href="./login.html"
}
else{
  let cartArr = JSON.parse(localStorage.getItem("cart"))||[];
  let itemExists=false;
  cartArr.forEach((elem)=>{
   if(item.name==elem.name){itemExists = true;}
   
  })
  if(!itemExists){
       item.sku[0].quantity=1;
       cartArr.push(item);
       localStorage.setItem("cart",JSON.stringify(cartArr));
    // adding item to cart
    

    
alert("item added to cart !!!")


  }
  else{alert("item already exists in cart")}


}




  

}



function search(data){
  let inputTag = document.querySelector("#searchP");
  let productsDiv = document.getElementById("products");

  inputTag.addEventListener("change",(e)=>{
    e.preventDefault()
    // let fd= data.filter((item)=>{
    //   return item.name.toLowerCase().includes(inputTag.value.toLowerCase());
    //   displayProducts(fd)
    // });
    console.log(data)
  })
}