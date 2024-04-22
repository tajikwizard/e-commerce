import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeStoreApi } from "../../services/fake-store-api";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const product = await fakeStoreApi.fetchProductById(productId);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);
  console.log(product);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8 lg:w-2/4">
      <div className="flex flex-col items-center shadow-lg rounded-lg p-8 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 mb-4 rounded-md"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <div className="category_conttainer">
          <span className="bg-red-300 block w-32 p-1 text-center text-white font-bold rounded-md">
            {" "}
            {product.category}
          </span>
        </div>
        <p className="text-lg mb-4">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <button className="bg-green-500 p-2 w-36 rounded-md text-white font-bold hover:bg-green-400">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
