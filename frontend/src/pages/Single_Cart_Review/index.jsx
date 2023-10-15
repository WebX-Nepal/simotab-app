import { useEffect, useState } from "react";
import "./cart.css";

import { useNavigate, useParams } from "react-router-dom";
import { getDataWithoutHeader } from "../../services/axios.service";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../cart-page/cart_slice";
// import axios from "axios";

const Single_Cart_Review = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const[number,setNumber]=useState(1)
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const cart = useSelector((state) => {
    return state.cart;
  });
  const me = cart.simot_app_cartItems.find((item) => {
    if (item._id === id) return item
  })
  console.log(me)

  const getData = async () => {
    const response = await getDataWithoutHeader(`products/${id}`)
    setProduct(response.product)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAddToCart = () => {
    navigate('/cart')
  }

  const handleIncreaseProductQuantity = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseProductQuantity = (product) => {
    dispatch(decreaseCart(product));
  };





  return (
    <>
      {
        product.name &&
        <div className="container cart-container ">
          <div className="product-container ">
            <div className="main-container">
              <div className="image">
                <img src={product.thumbnailUrl.url} className="product-image" />
              </div>

              <div className="text-container">
                <h4>{product.name}</h4>
                <span>{product.price}</span>
                <div className="add-items">
                  <Button variant="primary" onClick={() => handleDecreaseProductQuantity(product)} >-</Button >
                  {/* <Button variant="primary"></Button > */}
                  <div className="font-[500]">{me.cartQuantity}</div>
                  <Button variant="primary" onClick={() => handleIncreaseProductQuantity(product)} >+</ Button>
                </div>
                <h1>{product.description}</h1>

                <button className="btn mt-5" onClick={handleAddToCart}>Add to cart</button>


              </div>
            </div>



          </div>
        </div>
      }

    </>
  );
};

export default Single_Cart_Review;
