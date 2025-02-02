<template>
    <v-card
        :prepend-icon="IconUser"
        :title="title"
    >
        <v-divider class="mt-3" />

        <v-card-text class="px-4">
            <v-list density="compact">
                <v-list-item
                    v-for="(userDetail, i) in detailsList"
                    :key="i"
                    :value="userDetail"
                >
                    <template v-slot:prepend>
                    <v-icon :icon="userDetail.icon" />
                    </template>

                    <v-list-item-title v-text="userDetail.text" />
                    <v-list-item-subtitle v-text="userDetail.value" />
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { IconUser } from '@tabler/icons-vue';

interface Detail {
    icon: string;
    text: string;
    value: string;
}

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    detailsList: {
        type: Array as () => Detail[],
        required: true
    }
});
</script>
