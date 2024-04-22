const fakeStoreApi = {
  fetchAllProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = res.json();
    return result;
  },

  fetchProductById: async (productId) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch product");
      }
      const result = await res.json();
      return result;
    } catch (error) {
      throw new Error("Error fetching product: " + error.message);
    }
  },

  fetchProductsBySearchQuery: async (query) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  },
};

export { fakeStoreApi };
