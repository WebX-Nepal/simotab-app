import './index.css'
import { useEffect, useState } from "react";
import { getDataWithoutHeader } from "../../../services/axios.service";
import Products from "../../../components/cards/Product/Product.card";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerAdmin from '../../../components/Drawer';
const MyCards = () => {
  const [FeatureProduct, setFeatureProduct] = useState([])
  const [isDrawerOpen, setisDrawerOpen] = useState(false)
  const getFeatureProduct=async()=>{
    const response=await getDataWithoutHeader('get-feature-product')
    setFeatureProduct(response.products)
  }
  useEffect(()=>{
    getFeatureProduct()
  })

  return (
    <>
    
    <div className="ms-[40px]">
    <button className='ms-[200px] mt-10 text-2xl' onClick={()=>setisDrawerOpen(true)}><MenuIcon/></button>
    <DrawerAdmin isDrawerOpen={isDrawerOpen}  setisDrawerOpen={setisDrawerOpen} />
      <h1 className="my-card mb-10 mt-10 ms-2 text-2xl ">My Card</h1>
      <div className="ms-[100px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M36.1665 56.8333H25.8332C16.0914 56.8333 11.2193 56.8333 8.19417 53.8056C5.1665 50.7805 5.1665 45.9084 5.1665 36.1666V25.8333C5.1665 16.0915 5.1665 11.2194 8.19417 8.19429C11.2193 5.16663 16.1173 5.16663 25.9107 5.16663C27.4762 5.16663 28.7291 5.16663 29.7857 5.21054C29.7521 5.41721 29.734 5.62646 29.734 5.84088L29.7082 13.162C29.7082 15.996 29.7082 18.5018 29.9794 20.5194C30.2739 22.7075 30.9482 24.8955 32.7358 26.6832C34.5183 28.4657 36.709 29.1425 38.8971 29.437C40.9147 29.7083 43.4205 29.7083 46.2544 29.7083H56.7221C56.8332 31.0878 56.8332 32.7825 56.8332 35.0377V36.1666C56.8332 45.9084 56.8332 50.7805 53.8055 53.8056C50.7804 56.8333 45.9083 56.8333 36.1665 56.8333Z" fill="#DADADA"/>
  <path d="M49.9923 19.6772L39.7623 10.4728C36.8509 7.85068 35.3965 6.53834 33.6063 5.85376L33.583 12.9166C33.583 19.0055 33.583 22.0513 35.474 23.9423C37.365 25.8333 40.4108 25.8333 46.4997 25.8333H55.748C54.8128 24.0146 53.1337 22.5059 49.9923 19.6772Z" fill="#DADADA"/>
</svg>
    <h1 className="card-title mt-3">No card Available</h1>
      </div>
   


<h1 className='my-card  mt-10'>Add Your Card Now</h1>
    <div className="flex m-0 flex-wrap  mt-10px">

      {FeatureProduct&&
      FeatureProduct.map((product)=>{        
        return <Products key={product._id} product={product}/>
      })
    }
    </div>

    
      
    </div>
    </>
  );
};

export default MyCards;
