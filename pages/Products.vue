<template>
    <div class="flex flex-col gap-4 items-center">
        <ProductsTable v-if="!isLoadingProducts" :products="filteredProducts" @details="openProductDetails" @delete="deleteProduct" />
        <div v-else class="overflow-hidden">
            <v-progress-circular
                :size="75"
                color="primary"
                indeterminate
            />
        </div>

        <div v-if="selectedProduct" class="pa-4 text-center" >
            <v-dialog
                scrollable
                :model-value="detailsDialog"
                max-width="350"
                @afterLeave="closeUserDetails()"
            >
                <template v-slot:default="{ isActive }">
                    <Details :detailsList="productDetailsList" title="Detalles del Producto" />
                </template>
            </v-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProducts } from '#imports';
import type { Product } from '~/types/product';

// Fetch user data
const { products, fetchProducts, isLoadingProducts, deleteProduct } = useProducts();

onMounted(async () => {
    await fetchProducts()
})

// Filter users
const filterQuery = ref('');

const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        return product.title.toLowerCase().includes(filterQuery.value.toLowerCase());
    });
});


// Detalles del producto
const detailsDialog = ref(false);
const selectedProduct = ref<Product | null>(null);
const openProductDetails = (user: Product) => {
    selectedProduct.value = user;
    detailsDialog.value = true;
};

const closeUserDetails = () => {
    detailsDialog.value = false;
    selectedProduct.value = null;
};

const productDetailsList = computed(() => {
    if (!selectedProduct.value) return [];
    return [
        { icon: 'mdi-account', text: 'Nombre', value: selectedProduct.value.title },
        { icon: 'mdi-currency-usd', text: 'Precio', value: selectedProduct.value.price },
        { icon: 'mdi-information', text: 'Descripción', value: selectedProduct.value.description },
        { icon: 'mdi-tag', text: 'Categoría', value: selectedProduct.value.category },
        { icon: 'mdi-star', text: 'Rating', value: selectedProduct.value.rating.rate },
        { icon: 'mdi-account', text: 'Count', value: selectedProduct.value.rating.count }
    ]
})
</script>