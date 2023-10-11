import  { useEffect, useState } from "react";
import "./cart.css";
import { useNavigate, useParams } from "react-router-dom";
import { getDataWithoutHeader } from "../../services/axios.service";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart } from "../cart-page/cart_slice";
// import axios from "axios";

const Single_Cart_Review = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  // const[number,setNumber]=useState(1)
  const[product,setProduct]=useState({})
   const {id}=useParams()
  console.log(id)


  const getData=async()=>{
    const response=await  getDataWithoutHeader(`products/${id}`)
    console.log(response)
    setProduct(response.product)
  }

  useEffect(()=>{
    getData()
  },[])

  const handleAddToCart=()=>{
    dispatch(addToCart(product))
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
      product.name&&
      <div className="container cart-container">
      <div className="product-container">
        <img src={product.thumbnailUrl.url}className="product-image" />
        <div className="text-container">
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </div>

        <div className="add-items">
        <Button variant="primary" onClick={()=>handleDecreaseProductQuantity(product)} >-</Button >
          <Button variant="primary"></Button >
          <Button variant="primary" onClick={()=>handleIncreaseProductQuantity(product)} >+</ Button>
        </div>

        <div className="text">
          <h1>{product.description}</h1>    
        </div>
        <button className="btn" onClick={handleAddToCart}>Add to cart</button>         
      </div>
    </div>
    }
     
    </>
  );
};

export default Single_Cart_Review;
