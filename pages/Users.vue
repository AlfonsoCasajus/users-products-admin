<template>
    <div class="flex flex-col gap-4 items-center">
        <UsersTable v-if="!isLoadingUsers" :users="filteredUsers" @details="openUserDetails" @delete="deleteUser"/>
        <v-progress-circular
            v-else
            :size="75"
            color="primary"
            indeterminate
        />

        <div v-if="selectedUser" class="pa-4 text-center" >
            <v-dialog
                scrollable
                :model-value="detailsDialog"
                max-width="350"
                @afterLeave="closeUserDetails()"
            >
                <template v-slot:default="{ isActive }">
                    <Details :detailsList="userDetilsList" title="Detalles del Usuario" />
                </template>
            </v-dialog>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/composables/useUsers';
import type { User } from '~/types/user';

// Fetch user data
const { users, fetchUsers, deleteUser, isLoadingUsers } = useUsers();

onMounted(async () => {
    await fetchUsers()
})

// Filter users
const filterQuery = ref('');

const filteredUsers = computed(() => {
    if (!users.value) return [];
    return users.value.filter((user) => {
        return user.name.toLowerCase().includes(filterQuery.value.toLowerCase());
    });
});

// Detalles del usuario
const detailsDialog = ref(false);
const selectedUser = ref<User | null>(null);
const openUserDetails = (user: User) => {
    selectedUser.value = user;
    detailsDialog.value = true;
};

const closeUserDetails = () => {
    detailsDialog.value = false;
    selectedUser.value = null;
};

const userDetilsList = computed(() => {
    if (!selectedUser.value) return [];
    return [
        { icon: 'mdi-account', text: 'Nombre', value: selectedUser.value.name },
        { icon: 'mdi-email', text: 'Email', value:selectedUser.value.email },
        { icon: 'mdi-phone', text: 'Teléfono', value: selectedUser.value.phone },
        { icon: 'mdi-web', text: 'Sitio web', value: selectedUser.value.website },
        { icon: 'mdi-home', text: 'Dirección', value: `${selectedUser.value.address.street}, ${selectedUser.value.address.city}` },
        { icon: 'mdi-domain', text: 'Compañía', value: selectedUser.value.company.name },
    ]
})
</script>