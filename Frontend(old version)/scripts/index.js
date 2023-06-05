
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
  //console.log(JSON.stringify(data,null,2));
  ///////////////////////////////////////////////////////////////

  getCategory(data)
  
  



  ///////////////////////////////////////////////////////////////
}
else{alert("error:res.ok!=true")}

}

getProducts()



async function getCategory(arr){
let obj ={};
let divtoUp = document.querySelector("#displayDiv");
arr.forEach((item)=>{
    if(obj[item.category]==undefined){obj[item.category]=item.categoryImg}
});
// alert(JSON.stringify(obj,null,4))
for(let category in obj){
    let div131 = document.createElement("div");
    div131.innerHTML=`<div class="swiper-slide">
        
    <img  src=${obj[category]} alt=${category}>
    <a href="./products.html">
    <p>${category}</p>
    </a>
</div>`
divtoUp.append(div131)
}



}