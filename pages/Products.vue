<template>
    <section class="flex flex-col gap-4 items-center">
        <h1>Productos</h1>
        <div class="w-full">
            <v-text-field v-model="filterQuery" label="Another input" />
        </div>
        <div v-if="products.length" class="flex items-center gap-5 flex-wrap justify-evenly">
            <ProductsProductCard v-for="(product, index) of filteredProducts" :key="index" :product="product" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useProducts } from '#imports';


// Fetch user data
const { products, fetchProducts } = useProducts();

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

</script>