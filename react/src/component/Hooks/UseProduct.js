import { useState } from "react";
import toast from "react-hot-toast";

export const useProducts = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const getAllProducts = async () => {
    try {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(products);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      return;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const newProducts = products.filter(prod => prod.id !== id);
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
      toast.success("deleted successfully!");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      return;
    }
  };

  const getProductById = async (id) => {
    try {
      const product = products.find(prod => prod.id === id);
      return product;
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      return;
    }
  };

  const addProduct = async (prodData) => {
    try {
      if (
        !prodData.name ||
        !prodData.price ||
        !prodData.stock
      ) {
        toast.error("please add product details");
        return;
      }

      if (prodData.price <= 0) {
        toast.error("price must be valid positive number");
        return;
      }

      if (prodData.stock <= 0) {
        toast.error("stock must be valid positive number");
        return;
      }

      const newProducts = {
        name: prodData.name,
        description: prodData.description || "---",
        price: prodData.price,
        stock: prodData.stock,
        id: Date.now()
      };

      const updatedProducts = [...products, newProducts];

      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      toast.success("product addes successfully!");

      return newProducts;

    } catch (error) {
      toast.error(error.message);
      console.log(error);
      return;
    }
  };

  const updatedProducts = (id, prodData) => {
    try {
      const updateProduct = {
        name: prodData.name,
        description: prodData.description,
        price: prodData.price,
        stock: prodData.stock,
      };

      const newProducts = products.map((prod) =>
        prod.id === id ? { ...updateProduct, id: prod.id } : prod
      );

      setProducts(newProducts);

      localStorage.setItem("products", JSON.stringify(newProducts));

      toast.success("product updated successfully");

      return true;

    } catch (error) {
      toast.error(error.message);
      console.log(error);
      return false;
    }
  };

  return {
    products,
    deleteProduct,
    getProductById,
    getAllProducts,
    addProduct,
    updatedProducts
  };
};