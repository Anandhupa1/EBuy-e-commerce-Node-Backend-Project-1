
register
{
  "userName" : "Anandhu P A",
  "email" : "dummy@gmail23.com",
  "DOB"  :"2022-01-10T03:49:26.493+00:00",
  "role": "admin",
  "location":"kerala",
  "password":"amrut",
  "cpassword":"amrut"
  
}

login
{
  "email" : "dummy@gmail23.com",
  "password":"amrut",
}

notes input 
{
  "email" : "dummy@gmail23.com",
  "password":"amrut",
}



add a product


{
"name":"Beige Pedal Daypack",
"des": "A small, lightweight backpack to store and carry your day’s supplies. Ideal for travel, city or campus use, Pedal is crafted from highly durable cotton-canvas and comes in a sharp half-capsule shape.",
"subCategory":"pedal",
"subCategoryImg":"https://images.dailyobjects.com/marche/assets/images/other/pedal-daypack-up.jpg?tr=cm-pad_crop,v-2,w-72,h-71,dpr-1",
"category":"Laptop Backpacks",
"categoryImg":"https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-301,h-371,dpr-1",
"sku":[{
  "price":2499,
  "discount":1000,
  "image":"https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-660,h-567,dpr-1",
  "color":"grey",
  "colorImg":"https://images.dailyobjects.com/marche/icons/filter/color/beige.png?tr=cm-pad_resize,v-2,w-61,h-61,dpr-1",
  "features":"Minimally designed in a distinct half-capsule shape, Pedal Daypack is an exemplary choice for outdoors. Crafted in pure cotton canvas, its super-lightweight and comes with a wide opening to store large items while offering a comfortable and ergonomic fit."
  
}]




}


_________________________________________________________________________________________________

                        order 
{
  "paymentStatus":true,
  "status":"shipped",
  "amount":34544,
  "items":[
    
{
"name":"Beige Pedal Daypack",
"des": "A small, lightweight backpack to store and carry your day’s supplies. Ideal for travel, city or campus use, Pedal is crafted from highly durable cotton-canvas and comes in a sharp half-capsule shape.",
"subCategory":"pedal",
"subCategoryImg":"https://images.dailyobjects.com/marche/assets/images/other/pedal-daypack-up.jpg?tr=cm-pad_crop,v-2,w-72,h-71,dpr-1",
"category":"Laptop Backpacks",
"categoryImg":"https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-301,h-371,dpr-1",
"sku":[{
  "price":2499,
  "discount":1000,
  "image":"https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-660,h-567,dpr-1",
  "color":"grey",
  "colorImg":"https://images.dailyobjects.com/marche/icons/filter/color/beige.png?tr=cm-pad_resize,v-2,w-61,h-61,dpr-1",
  "features":"Minimally designed in a distinct half-capsule shape, Pedal Daypack is an exemplary choice for outdoors. Crafted in pure cotton canvas, its super-lightweight and comes with a wide opening to store large items while offering a comfortable and ergonomic fit."
  
}]




}]




}

    ],
  "shippingAddress":{
    "city": "mangalaPuram",
    "street": "abc street",
    "houseNumber": "4QERF",
    "pinCode" :"685553"
  }
  
}


addressSchema
{
  "shippingAddress":{
    "city" : "form.city.value",
        "street" : "form.street.value",
        "houseNumber" : "form.houseNo.value",
        "pinCode" : "form.pin.value"
  }
}