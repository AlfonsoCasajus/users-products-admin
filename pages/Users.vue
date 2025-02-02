<template>
    <div class="flex flex-col gap-4 items-center">
        <UsersTable v-if="!isLoadingUsers" :users="filteredUsers" @delete="deleteUser"/>
        <v-progress-circular
            v-else
            :size="75"
            color="primary"
            indeterminate
        />
    </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/composables/useUsers';

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
</script>