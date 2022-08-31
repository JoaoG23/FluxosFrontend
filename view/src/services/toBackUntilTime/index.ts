import { useNavigate } from "react-router-dom";
export const useToBackUntilTime = (timeToAction: number) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(-1);
  }, timeToAction);
}
