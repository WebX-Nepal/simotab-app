import "./product.card.css";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { object } from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../pages/cart-page/cart_slice";

const Products = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddClick = () => {
    dispatch(addToCart(product))

  }
  return (
    <div className="cards  ">
      <div className="card flex justify-center items-center flex-col">
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1}

        >
          <img
            src={product.thumbnailUrl.url}
            className="card-img-top imagec"
            alt="card image"
          />
        </Tilt>
        <div className="text-area mt-[20px]">
          <div className="card-body m-auto
          ">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text text-center">
              <del>Rs {product.price}</del>
              <span className="ms-2">Rs {product.price - (product.discount * product.price) / 100}</span>

            </p>
            <Link
              to={`/shop/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="button" onClick={() => handleAddClick(product)}>Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  product: object,
};
export default Products;
