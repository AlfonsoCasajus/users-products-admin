<template>
    <div class="overflow-x-auto">
        <v-data-table :headers="usersTableHeaders" :items="users"
            :header-props="{ class: 'bg-[#212529] text-[#f8f9fa]' }"
            :row-props="{ class: 'bg-[#212529] text-[#f8f9fa]' }"
           
        >
            <template v-slot:item.actions="{ item }">
                <v-btn variant="tonal" color="info" size="small" rounded="xl">
                    <IconDots size="24" />
                    <v-menu activator="parent" >
                        <v-list>
                            <v-list-item value="details">
                                <v-list-item-title class="flex items-center gap-2"><IconEye />Ver</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="delete" @click="$emit('delete', item.id)">
                                <v-list-item-title class="flex items-center gap-2"><IconTrash />Eliminar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { IconDots, IconTrash, IconEye } from '@tabler/icons-vue';
import type { User } from '~/types/user';

const usersTableHeaders = [
    { title: 'Name', value: 'name' },
    { title: 'Username', value: 'username' },
    { title: 'Email', value: 'email' },
    { title: 'Acciones', value: 'actions' },
];

defineProps({
    users: {
        type: Array as () => User[],
        required: true
    }
});

defineEmits(['delete']);
</script>
