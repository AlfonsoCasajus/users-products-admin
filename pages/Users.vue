<template>
    <section class="flex flex-col gap-4 items-center">
        <h1>Usuarios</h1>
        <div class="w-full">
            <v-text-field v-model="filterQuery" label="Another input" />
        </div>
        <div class="flex flex-col gap-3">
            <UsersTable :users="filteredUsers" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useUsers } from '~/composables/useUsers';


// Fetch user data
const { users, fetchUsers } = useUsers();

onMounted(async () => {
    await fetchUsers()
})

// Filter users
const filterQuery = ref('');

const filteredUsers = computed(() => {
    return users.value.filter((user) => {
        return user.name.toLowerCase().includes(filterQuery.value.toLowerCase());
    });
});
</script>