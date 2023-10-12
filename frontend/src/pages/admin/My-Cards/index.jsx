import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NetworkLockedIcon from "@mui/icons-material/NetworkLocked";
import { useNavigate } from "react-router-dom";
const MyCards = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NetworkLockedIcon  />

      <h1> No card vailable</h1>

      <button
        className=" bg-slate-800 text-white p-4 rounded-md mt-10"
        onClick={() => navigate("/shop")}
      >
        {" "}
        <ShoppingBagIcon className="animate-bounce" />
        Start Shopping
      </button>
    </div>
  );
};

export default MyCards;
