import "./product.card.css";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { object } from "prop-types";

const Products = ({ product }) => {
  return (
    <div className="cards">
      <div className="card">
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1}
          style={{ height: 250, width: 250 }}
        >
          <img
            src={product.thumbnailUrl.url}
            className="card-img-top image"
            alt="card image"
          />
        </Tilt>
        <div className="text-area">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <Link
              to={`/shop/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="button">Add to cart</button>
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
