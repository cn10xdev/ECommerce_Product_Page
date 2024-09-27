// Importing necessary module, hooks etc.
import starImg from "../../assets/images/star.png";

// Creating CartItems functional component
function CartItems({ cart }) {
  // Returning the JSX Content
  return (
    <div className="w-full h-full flex items-center flex-col overflow-scroll no-scrollbar pb-2">
      {cart.map((product, index) => (
        <div className="flex justify-evenly flex-row mt-2 w-full">
          <div className="flex justify-center flex-col items-center">
            <div className="w-4/5">
              <img
                src={product.image[0]}
                className="rounded-xl"
                width={"300px"}
                alt="product"
              />
            </div>
          </div>
          <div className="w-3/5 flex flex-col">
            <div className="text-lg font-bold">
              <span>{product.Brand}</span>
            </div>
            <div className="text-sm font-mono">
              <span>{product.title}</span>
            </div>
            <div className="font-extrabold">
              <span>&#8377; {product.quantity * product.price}</span>
            </div>
            <div className="text-sm font-bold">
              MRP{" "}
              <span className="">&#8377; {product.mrp * product.quantity}</span>{" "}
              <span className="">
                (
                {Math.round(
                  ((product.mrp - product.price) / product.mrp) * 100
                )}
                % OFF)
              </span>
            </div>
            <div className="font-extrabold  mb-2">
              Quantity : {product.quantity}
            </div>
            <div className="badge badge-primary mr-5 font-extrabold flex">
              4 <img src={starImg} className="w-3 h-4 ml-1" alt="star" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Exporting CartItems component
export default CartItems;
