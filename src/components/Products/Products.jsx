import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fakeStoreApi } from "../../services/fake-store-api";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../cartContext";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query] = useSearchParams();

  const { addToCart } = useCart();
  const searchQuery = query.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let fetchedProducts;
      if (selectedCategory) {
        fetchedProducts = await fakeStoreApi.fetchProductsByCategory(
          selectedCategory
        );
      } else if (searchQuery) {
        fetchedProducts = await fakeStoreApi.fetchProductsBySearchQuery(
          searchQuery
        );
      } else {
        fetchedProducts = await fakeStoreApi.fetchAllProducts();
      }
      setProducts(fetchedProducts);
      setLoading(false);
    };

    const fetchCategories = async () => {
      const fetchedCategories = await fakeStoreApi.fetchAllCategories();
      setCategories(fetchedCategories);
    };

    fetchProducts().catch(console.error);
    fetchCategories().catch(console.error);
  }, [searchQuery, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "All" ? null : category);
  };

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
    <div className="container mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Categories:</h2>
        <div className="flex space-x-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className={`bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded ${
                selectedCategory === category ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
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
    </div>
  );
};

export default Products;
