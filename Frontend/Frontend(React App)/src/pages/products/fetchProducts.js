let baseUrl = "";
import { useLocation, useNavigate } from 'react-router-dom';





async function fetchProducts(){
  const queryParams = new URLSearchParams(location.search);

     alert(queryParams.toString())
}

export default fetchProducts;
