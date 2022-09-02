import { useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();

  const pageRefresh = () => {
   navigate(0) // Dar refresh na pagina
  }
  useEffect(() => {
    pageRefresh()
  },[])
  return(
    <Navigate to={'/admin/dash/'}></Navigate>
  )
}
export default AuthRedirect;