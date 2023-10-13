import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../services/axios.service";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../signin/auth.Slice";

const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [user, setuser] = useState({});
  const { token, userId } = useSelector((state) => {
    return state.auth;
  });

  const getUser = async () => {
    const response = await getData(`users/${userId}`, token);
    if (response.success) {
      setuser(response.user);
      dispatch(loadUser(response.user))

    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {user && <h1>Hello {user.name} how are you</h1>}

      <button onClick={() => navigate("/admin/edit-profile")}>Edit </button>
    </div>
  );
};

export default MyProfile;
