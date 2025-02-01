import type { User } from "~/types/user";

export const useUsers = () => {
    const users = ref<User[]>([]);

    const isLoadingUsers = ref(false);
  
    const fetchUsers = async () => {
      isLoadingUsers.value = true;
      try {
        console.log('Fetching users...');
        const userResponse = await $fetch('https://jsonplaceholder.typicode.com/users');

        const usersList = userResponse as User[];
        users.value = usersList;

      } catch (error) {
        console.error('Error fetching users: ', error);
      }
      isLoadingUsers.value = false;
    };
  
    return {
      users,
      fetchUsers,
      isLoadingUsers,
    };
  };