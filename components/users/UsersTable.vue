<template>
    <div class="overflow-hidden">
        <table class="min-w-full">
            <thead class="bg-[#2e3338c2] text-white">
            <tr class="table-row">
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Username</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
            </tr>
            </thead>
            <tbody class="bg-[#212529] text-[#f8f9fa]">
                <tr v-for="(item, index) in users" :key="item.name" class="table-row hover:bg-[#30373d6e]">
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.username }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.email }}</td>
                    <td class="px-6 py-4">
                        <v-btn :icon="IconDots" variant="tonal" size="small" rounded="xl">
                            <IconDots size="24" />
                            <v-menu activator="parent">
                            <v-list>
                                <v-list-item value="details" @click="$emit('details', item)">
                                    <v-list-item-title class="flex items-center gap-2"><IconEye />Ver</v-list-item-title>
                                </v-list-item>
                                <v-list-item value="delete" @click="$emit('delete', item.id)">
                                    <v-list-item-title class="flex items-center gap-2"><IconTrash />Eliminar</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { IconDots, IconTrash, IconEye } from '@tabler/icons-vue';
import type { User } from '~/types/user';
import { gsap } from "gsap";

defineProps({
    users: {
        type: Array as () => User[],
        required: true
    }
});

defineEmits(['delete', 'details']);

onMounted(() => {
    gsap.from('.table-row', {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 1,
        ease: "ease-in-out",
    });
});

</script>
