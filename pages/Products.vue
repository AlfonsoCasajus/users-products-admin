<template>
    <div class="flex flex-col gap-4 items-center">
        <div  v-if="!isLoadingProducts" class="w-full">
            <ProductsTable v-if="filteredProducts.length" :products="filteredProducts" @details="openProductDetails" @delete="openConfirmDialog" />
            <div v-else class="w-full text-center"> No hay productos con ese nombre</div>
        </div>
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
        <v-dialog
            scrollable
            :model-value="confirmDialog"
            max-width="350"
            @afterLeave="closeConfirmDialog()"
        >
            <template v-slot:default="{ isActive }">
                <v-card
                    :prepend-icon="IconTrash"
                    text="Estas seguro que quieres eliminar este producto? Esta accion es irreversible"
                    title="Eliminar Producto"
                >
                    <template v-slot:actions>

                        <v-btn @click="confirmProductRemoval" variant="tonal" color="#E80C15">
                            Eliminar
                        </v-btn>
                    </template>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { useProducts } from '#imports';
import type { Product } from '~/types/product';
import { IconTrash } from '@tabler/icons-vue';

// Fetch user data
const { products, fetchProducts, isLoadingProducts, deleteProduct } = useProducts();

onMounted(async () => {
    await fetchProducts()
})

// Filtrado de productos
const filtersStore = useFiltersStore();
const filterQuery = computed(() => filtersStore.query);

const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        return product.title.toLowerCase().includes(filterQuery.value.toLowerCase());
    });
});

// Confirmacion de eliminacion de producto
const confirmDialog = ref(false);

const openConfirmDialog = (product: Product) => {
    selectedProduct.value = product;
    confirmDialog.value = true;
};

const closeConfirmDialog = () => {
    confirmDialog.value = false;
    selectedProduct.value = null;
};

const confirmProductRemoval = () => {
    if (!selectedProduct.value) return;
    deleteProduct(selectedProduct.value.id)
    closeConfirmDialog();
}

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