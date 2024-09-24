/* Styles */
import styles from "./Products.module.css";

/* Component */
import Cart from "../../pages/Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";
import { products } from "../../constants/products";

/* Constants */

const Products = ({ cart, updateQuantity, addToCart }) => {
  return (
    <div className="App">
      <h1>Product Page</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default Products;
