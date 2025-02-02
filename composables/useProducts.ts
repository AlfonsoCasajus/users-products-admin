import type { Product } from "~/types/product";

export const useProducts = () => {
    const products = ref<Product[]>([]);
    const isLoadingProducts = ref(false)

    const fetchProducts = async () => {
      try {
        const productsResponse = await $fetch('https://fakestoreapi.com/products')

        const productsList = productsResponse as Product[];

        products.value = productsList;
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

        // Eliminar un producto
        const deleteProduct = async (productId: number) => {
          products.value = products.value.filter((product) => product.id !== productId);
      };
  
  
    return {
      fetchProducts,
      deleteProduct,
      isLoadingProducts,
      products
    };
  };