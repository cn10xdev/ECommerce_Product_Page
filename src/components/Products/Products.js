/* Styles */
import styles from "./Products.module.css";

/* Component */
import { products } from "../../constants/products";
import Section from "../Sections/Section";
import Heading from "../Heading/Heading";
import { GradientLight } from "../GradientLight/GredientLight";
import ClipPath from "../../assets/ClipPath";
import ProductTag from "../ProductTag/ProductTag";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Footer from "../Footer/Footer";

/* Constants */

const Products = ({ cart, updateQuantity, addToCart }) => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] w-screen h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-n-8">
      <Section id="products">
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Covered Drag, Bullock Wagon"
          />

          <div className="flex flex-wrap gap-10 mb-10 w-full item center justify-center">
            {products.map((item) => (
              <div
                className="relative p-0.5 bg-no-repeat  w-[80%] md:max-w-[24rem] pb-[4rem]"
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                  <h5 className="text-[1rem] font-bold leading-6 md:text-base mb-6 text-[#AC6AFF]">
                    {item.Brand}
                  </h5>
                  <h5 className="text-2xl leading-normal mb-5 md:truncate">
                    {item.title}
                  </h5>
                  <p className="font-extrabold text-[0.875rem] leading-6 md:text-base mb-6 text-n-3">
                    &#8377; {item.price}{" "}
                    <span className="font-thin line-through text-xs">
                      &#8377; {item.mrp}
                    </span>
                    &nbsp; &nbsp;
                    <span className="text-green-600">
                      {Math.round((item.price / item.mrp) * 100)}% off
                    </span>
                  </p>

                  <ProductTag rating={item.rating} review={item.Review} />

                  <p className="mt-6">Free Delivery</p>
                  <h5 className="text-green-600 font-extrabold my-1">
                    Bank Offer
                  </h5>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8 z-1"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    <img
                      src={item.image[0]}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full mix-blend-screen"
                    />
                  </div>
                </div>

                <div className="absolute right-0 bottom-5 w-full flex items-center justify-center mt-6 z-50 cursor-pointer">
                  {" "}
                  <AddToCartButton title="Add To Cart" onClick={addToCart} />
                </div>

                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Products;

// /* Styles */
// import styles from "./Products.module.css";

// /* Component */
// import Cart from "../../pages/Cart/Cart";
// import ProductCart from "../ProductCart/ProductCart";
// import { products } from "../../constants/products";

// /* Constants */

// const Products = ({ cart, updateQuantity, addToCart }) => {
//   return (
//     <div className="App">
//       <h1>Product Page</h1>
//       <div className="products">
//         {products.map((product) => (
//           <ProductCart
//             key={product.id}
//             product={product}
//             addToCart={addToCart}
//           />
//         ))}
//       </div>
//       <Cart cart={cart} updateQuantity={updateQuantity} />
//     </div>
//   );
// };

// export default Products;
