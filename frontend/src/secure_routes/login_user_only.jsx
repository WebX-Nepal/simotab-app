import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const user = useSelector((state) => {
    return state.auth;
  });
  console.log(user)
  return <div>{user.isLogedInStatus ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default SecureRoute;
