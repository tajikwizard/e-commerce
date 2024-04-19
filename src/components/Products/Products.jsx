import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fakeStoreApi } from "../../services/fake-store-api";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await fakeStoreApi.fetchAllProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array to run the effect only once

  if (!products.length) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">No products found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => <Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default Products;
