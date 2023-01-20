// setTimeout(function () {
//     document.querySelector(".preloader").style.display = "none";
//     document.querySelector(".container").style.display = "block";
//   }, 1000);

let baseUrl = "http://localhost:4500"

  async function getProducts(){
    let res = await fetch(`${baseUrl}/products`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
if(res.ok){
    let data = await res.json();
    console.log(data)
}
else{alert("error:res.ok!=true")}

  }

getProducts()