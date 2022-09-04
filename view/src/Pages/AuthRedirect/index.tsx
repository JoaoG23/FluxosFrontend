import { useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    navigate(0);
  },[])
  return(
    <Navigate to={'/admin/dash/'}></Navigate>
  )
}
export default AuthRedirect;