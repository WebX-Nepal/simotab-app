import  { useEffect, useState } from "react";
import "./cart.css";
import { useParams } from "react-router-dom";
import { getDataWithoutHeader } from "../../services/axios.service";
import { Button } from "@mui/material";
// import axios from "axios";

const Single_Cart_Review = () => {

  const[number,setNumber]=useState(1)
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
        <Button variant="primary" onClick={()=>setNumber(number-1)} >-</Button >
          <Button variant="primary"  >{number}</Button >
          <Button variant="primary" onClick={()=>setNumber(number + 1)} >+</ Button>
        </div>

        <div className="text">
          <ul className="list">
           <li> <p>Powered by NFC and QR code</p></li> 
           <li> <p>iOS & andriod| No App needed</p></li>
            <li><p>All you need to network</p></li>
           <li><p>Powered by NFC and QR code</p></li> 
           <li><p>One off Fee | No subscription</p></li> 
           <li><p>Free Worldwide Shipping</p></li> 
           <li><p>In stock ready to ship</p></li> 
          </ul>
        </div>
        <button className="btn">Add to cart</button>         
      </div>
    </div>
    }
     
    </>
  );
};

export default Single_Cart_Review;
