let baseUrl = "";
import { useLocation, useNavigate } from 'react-router-dom';




 function AppendQuery(){

  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  queryParams.set(q, v);
  navigate(`?${queryParams.toString()}`);
   
}

export default AppendQuery;
