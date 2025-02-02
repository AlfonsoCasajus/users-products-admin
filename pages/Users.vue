<template>
    <section class="flex flex-col gap-4 items-center">
        <h1>Usuarios</h1>
        <div class="flex flex-col gap-3">
            <UsersTable :users="filteredUsers" @delete="deleteUser"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useUsers } from '~/composables/useUsers';

// Fetch user data
const { users, fetchUsers, deleteUser } = useUsers();

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
</script>