
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../configs/baseUrl';
import { changeCart } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';


//this function is of no use currently________________________________________


async function fetchProducts(){
  const queryParams = new URLSearchParams(location.search);
 
    //  alert(queryParams.toString())
    let url = `${baseUrl}/products?${queryParams.toString()}`;
    let res = await fetch(url);
    let data = await res.json();
    return data ;
    
}

export default fetchProducts;
