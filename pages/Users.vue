<template>
    <div class="flex flex-col gap-4 items-center">
        <div v-if="!isLoadingUsers" class="w-full">
            <UsersTable  v-if="filteredUsers.length" :users="filteredUsers" @details="openUserDetails" @delete="openConfirmDialog"/>
            <div v-else class="w-full text-center">
                No hay usuarios con ese nombre
            </div>
        </div>
        <div v-else class="overflow-hidden">
            <v-progress-circular
                :size="75"
                color="primary"
                indeterminate
            />
        </div>

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
        <v-dialog
            scrollable
            :model-value="confirmDialog"
            max-width="350"
            @afterLeave="closeConfirmDialog()"
        >
            <template v-slot:default="{ isActive }">
                <v-card
                    :prepend-icon="IconTrash"
                    text="Estas seguro que quieres eliminar al usuario? Esta accion es irreversible"
                    title="Eliminar usuario"
                >
                    <template v-slot:actions>

                        <v-btn @click="confirmUserRemoval" variant="tonal" color="#E80C15">
                            Eliminar
                        </v-btn>
                    </template>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/composables/useUsers';
import type { User } from '~/types/user';
import { IconTrash } from '@tabler/icons-vue';

// Fetch user data
const { users, fetchUsers, deleteUser, isLoadingUsers } = useUsers();

onMounted(async () => {
    await fetchUsers()
})

// Filtrado de usuarios
const filtersStore = useFiltersStore();
const filterQuery = computed(() => filtersStore.query);

const filteredUsers = computed(() => {
    if (!users.value) return [];
    return users.value.filter((user) => {
        return user.name.toLowerCase().includes(filterQuery.value.toLowerCase());
    });
});

// Confirmacion de eliminacion de usuario
const confirmDialog = ref(false);

const openConfirmDialog = (user: User) => {
    selectedUser.value = user;
    confirmDialog.value = true;
};

const closeConfirmDialog = () => {
    confirmDialog.value = false;
    selectedUser.value = null;
};

const confirmUserRemoval = () => {
    if (!selectedUser.value) return;
    deleteUser(selectedUser.value.id)
    closeConfirmDialog();
}

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