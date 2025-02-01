import type { Product } from "~/types/product";

export const useProducts = () => {
    const products = ref<Product[]>([]);
    const isLoadingProducts = ref(false)

    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const productsResponse = await $fetch('https://fakestoreapi.com/products')

        const productsList = productsResponse as Product[];

        products.value = productsList;
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
  
    return {
      fetchProducts,
      isLoadingProducts,
      products
    };
  };