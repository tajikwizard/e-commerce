import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fakeStoreApi } from "../../services/fake-store-api";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../cartContext";
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query] = useSearchParams();

  const { addToCart } = useCart();
  const searchQuery = query.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = searchQuery
        ? await fakeStoreApi.fetchProductsBySearchQuery(searchQuery)
        : await fakeStoreApi.fetchAllProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts().catch(console.error);
  }, [searchQuery]);

  if (!loading && searchQuery && !products.length) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            No products found matching your query.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            data={product}
            addToCart={() => addToCart(product)}
          />
        ))
      )}
    </div>
  );
};

export default Products;
