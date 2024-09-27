// Importing necessary module, hooks, images etc.
import emptyCartImg from "../../assets/images/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { GradientLight } from "../GradientLight/GredientLight";

// Creating NoItemInCart functional component
function NoItemInCart() {
  const navigate = useNavigate();

  // Returning the JSX Content
  return (
    <div className="flex flex-col justify-center items-center w-screen bg-n-8 h-screen relative overflow-hidden">
      <img src={emptyCartImg} alt="empty cart" className="w-48" />
      <div className="font-extrabold text-2xl">Your cart is empty!</div>
      <div className="font-bold text-xl mb-6">Add items to it now.</div>
      <button
        className="btn btn-primary bg-[#AC6AFF] btn-wide rounded-lg px-10 py-3"
        onClick={() => {
          navigate("/");
        }}
      >
        SHOP NOW
      </button>
      <GradientLight />
    </div>
  );
}

// Exporting NoItemInCart component
export default NoItemInCart;
