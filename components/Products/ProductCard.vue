<template>
    <v-card
        :disabled="false"
        :loading="false"
        width="250"
        color="#212529"
    >
        <v-img
            height="250"
            width="250"
            cover
            :src="product.image"
        />

        <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
        </v-card-item>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                    :model-value="product.rating.count"
                    color="amber"
                    density="compact"
                    size="small"
                    readonly
                />
            </v-row>
        </v-card-text>
        <v-card-subtitle>
            <IconCurrencyDollar />
            <span class="me-1">{{ product.price }}</span>
        </v-card-subtitle>
    </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IconDots, IconCurrencyDollar } from '@tabler/icons-vue';
import type { Product } from '~/types/product';

const props = defineProps({
    product: {
        type: Object as () => Product,
        required: true
    }
});
</script>