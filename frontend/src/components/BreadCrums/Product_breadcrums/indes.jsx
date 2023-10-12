import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./shopSection.module.css";
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
    console.log(products);
  };
  useEffect(() => {
    getCatgories();
    const id = categories.map((cat, index) => {
      if (index === 1) return cat._id;
    });
    if (id) {
      HandleCategory(id);
    }
  }, []);

  const HandleCategory = async (id) => {
    console.log("i got clicked");
    const response = await postDataWithHeader(
      "get-product-by-category",
      { category: id },
      token
    );
    setproducts(response.products);
  };

  return (
    <>
      <div className={styles.shopSection}>
        <div className={styles.sectionSearch}>
          <div className={styles.scrollContainer}>
            {categories &&
              categories.map((category, index) => {
                return index === 0 ? (
                  <button
                    autoFocus
                    key={category._id}
                    onClick={() => {
                      HandleCategory(category._id);
                    }}
                  >
                    {category.name}
                  </button>
                ) : (
                  <button
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
