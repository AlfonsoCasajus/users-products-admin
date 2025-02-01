<template>
    <div class="overflow-x-auto">
        <v-data-table :headers="usersTableHeaders" :items="users">
            <template v-slot:item.actions="{ value }">
                <v-btn variant="tonal" color="info" size="small" rounded="xl">
                    <IconDots size="24" />
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item value="ver">
                                <v-list-item-title>Ver</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="ver">
                                <v-list-item-title>Eliminar</v-list-item-title>
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
import { IconDots } from '@tabler/icons-vue';
import type { User } from '~/types/user';

const usersTableHeaders = [
    { title: 'Name', value: 'name' },
    { title: 'Username', value: 'username' },
    { title: 'Email', value: 'email' },
    { title: 'Acciones', value: 'actions' },
];

const props = defineProps({
    users: {
        type: Array as () => User[],
        required: true
    }
});
</script>
