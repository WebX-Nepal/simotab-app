import { useSelector } from "react-redux";
import styles from "./shopSection.module.css";
import { useEffect, useState } from "react";
import { getData, postDataWithHeader } from "../../../services/axios.service";
import Products from "../../cards/Product/Product.card";

function ShopSection() {
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([]);

  const { token } = useSelector((state) => {
    return state.auth;
  });

  const getCatgories = async () => {
    const response = await getData("categories", token);
    setcategories(response.categories);
  };
  useEffect(() => {
    getCatgories();
  }, []);

  const HandleCategory = async (id) => {
    const response = await postDataWithHeader("get-product-by-category", { category: id },token);
    setproducts(response.products);
  };

  return (
    <>
      <div className={styles.shopSection}>
        <div className={styles.sectionSearch}>
          <div className={styles.scrollContainer}>
            {categories &&
              categories.map((category,index) => {
                return (
                    index===0?  <button
                    autoFocus
                    key={category._id}
                    onClick={() => {
                      HandleCategory(category._id);
                    }}
                  >
                    {category.name}
                  </button>:<button
                    key={category._id}
                    onClick={() => {
                      HandleCategory(category._id);
                    }}
                  >
                    {category.name}
                  </button>
                 
                );
              })}
          </div>
        </div>
      </div>
      {products &&
        products.map((product) => {
          return <Products product={product} key={product._id} />;
        })}
    </>
  );
}

export default ShopSection;
