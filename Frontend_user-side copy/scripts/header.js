


function navbar (){
    let nav = document.querySelector('nav');
    nav.innerHTML=`<div id="logo1" >
    <a href="./home.html">
        <img   src="./images/logo.png" alt="EBuy_logo">
    </a>
  
</div> 


<div class="navbar-container container">
  

    <input type="checkbox" name="" id="">
    <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
    </div>
    <ul class="menu-items">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./products.html">Products</a></li>
        <li><a href="./login.html">login</a></li>
        <li><a href="./signup.html">signUp</a></li>
        <!-- <li><a href="">Testimonial</a></li>
        <li><a href="#">Contact</a></li> -->
    </ul>
    <!-- <h1 class="logo">Navbar</h1> -->
   
    </div>
    <div class="navIcons">
        <h1><span class="material-symbols-outlined">
            shopping_bag
            </span></h1>
      
        <h3><span class="material-symbols-outlined">
            search
            </span></h3>
    </div>

`;
}            
navbar()
