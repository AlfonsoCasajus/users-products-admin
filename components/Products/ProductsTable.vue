<template>
    <div class="overflow-hidden w-full">
        <table class="w-full">
            <thead class="bg-[#2e3338c2] text-white">
            <tr class="table-row">
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Categoria</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Precio</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
            </tr>
            </thead>
            <TransitionGroup
                tag="tbody"
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
                class="bg-dark-primary text-light-primary"
            >
                <tr v-for="(product, index) in products"
                    :key="product.id"
                    :data-index="index"
                    class="table-row hover:bg-[#30373d6e]"
                >
                    <td class="px-6 py-4 whitespace-nowrap truncate max-w-[300px]">
                        {{ product.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <v-chip :style="{ color: getCategoryColor(product.category) }" class="capitalize">
                           {{ product.category }}
                        </v-chip>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">$ {{ product.price }}</td>
                    <td class="px-6 py-4">
                        <v-btn :icon="IconDots" variant="tonal" size="small" rounded="xl">
                            <IconDots size="24" />
                            <v-menu activator="parent">
                            <v-list>
                                <v-list-item value="details" @click="$emit('details', product)">
                                    <v-list-item-title class="flex items-center gap-2"><IconEye />Ver</v-list-item-title>
                                </v-list-item>
                                <v-list-item value="delete" @click="$emit('delete', product.id)">
                                    <v-list-item-title class="flex items-center gap-2"><IconTrash />Eliminar</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                        </v-btn>
                    </td>
                </tr>
            </TransitionGroup>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { IconDots, IconTrash, IconEye } from '@tabler/icons-vue';
import type { Product } from '~/types/product';
import { gsap } from "gsap";

defineProps({
    products: {
        type: Array as () => Product[],
        required: true
    }
});

defineEmits(['delete', 'details']);

// Definir el color de las categorias
const categoryColors = ['#4caf50', '#2196f3', '#8bc34a', '#795548', '#607d8b', '#ff9800', '#e91e63'];

const getCategoryColor = (category: string) => {
    const categoryLength = category.length;

    return categoryColors[categoryLength % categoryColors.length];
};

// Transiciones y animaciones
onMounted(() => {
  gsap.from(['table', '.table-row'], {
    x: -50,
    opacity: 0,
    rotate: -3,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
  });
});

const { onBeforeEnter, onEnter, onLeave } = useTransitions()

</script>
