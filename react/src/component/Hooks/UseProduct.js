import { useState } from "react"
import toast from "react-hot-toast"
export const useProducts =() =>{
    const [products , setProducts]= useState(
        JSON.parse(localStorage.getItem("products")) || [],
    
    );
    const getAllProducts =async ()=>{
        try{
            const products = JSON.parse(localStorage.getItem("products"))||[];
            setProducts(products);
        }catch(error){
            toast.error(error);
            console.log(error);
            return;
        };
        const deleteProduct = async(id) =>{
            try{
                const newProducts = products.filter(prod => prod.id !== id)
                setProducts(newProducts);
                localStorage.setItem("products", JSON.stringify(newProducts))
                toast.success("deleted successfully!")
            }catch(error){
            toast.error(error);
            console.log(error);
            return;
            };
        
        const getProductById = async (id) => {
            try{
                const product = products.find(prod => prod.id === id)
                setProducts(product)
            }catch(error){
            toast.error(error);
            console.log(error);
            return;
            };
            }
        return { products, deleteProduct,  getProductById};
        }
        }
}