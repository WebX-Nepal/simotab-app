import { useDispatch, useSelector } from "react-redux";
import './index.css'
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Card, CardContent } from "@mui/material";
import Paybtn from "./Paybtn";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "./cart_slice";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseProductQuantity = (course) => {
    dispatch(addToCart(course));
  };
  const handleDecreaseProductQuantity = (course) => {
    dispatch(decreaseCart(course));
  };
  const handleRemoveFromCart = (course) => {
    dispatch(removeFromCart(course));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.simot_app_cartItems.length === 0 ? (
        <Card>
          <CardContent>
            <div className="cart-empty">
              <p>Your Cart Is Empty</p>
              <div className="continue-shopping">
                <Link
                  to="/shop"
                  className="bg-green-500 text-black p-3 rounded-md"
                >
                  <ShoppingCartIcon />

                  <span className="text-black">Start Shopping</span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>
          <div className="titles">
            <h3 className="">Product name</h3>
            <h3 className="">Price</h3>
            <h3 className="">Quantity</h3>
            <h3 className="">Total</h3>
          </div>
          <div className="cart-items">
            {cart.simot_app_cartItems.length > 0 &&
              cart.simot_app_cartItems.map((cartItem) => {
                return (
                  <div key={cartItem._id} className="cart-item">
                   
                    <div className="">
                        <div>
                        <div>
                        <img src={cartItem.thumbnailUrl.url} alt="" className="cart-product-image" />
                    </div>

                      <h3 className="font-serif p-2">Title : {cartItem.name}</h3>
                      <h3 className="font-serif p-2 ">Description : {cartItem.description}</h3>
                        </div>
                      <Button
                        className="m-2"
                        variant="contained"
                        onClick={() => {
                          handleRemoveFromCart(cartItem);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button
                        onClick={() => {
                          handleIncreaseProductQuantity(cartItem);
                        }}
                      >
                        +
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button
                        onClick={() => {
                          handleDecreaseProductQuantity(cartItem);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="cart-product-price">
                      $ {cartItem.cartQuantity * cartItem.price}
                    </div>
                  </div>
                );
              })}
            <div className="cart-summary">
              <button
                className="clear-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleClearCart();
                }}
              >
                {" "}
                clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>SubTotal</span>
                  <span className="amount">${cart.simot_app_cartTotalAmount}</span>
                </div>
                <Paybtn simot_app_cartItems={cart.simot_app_cartItems} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
