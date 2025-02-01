import type { User } from "~/types/user";

export const useUsers = () => {
    const users = ref<User[]>([]);
  
    const fetchUsers = async () => {
      try {
        console.log('Fetching users...');
        const userResponse = await $fetch('https://jsonplaceholder.typicode.com/users');

        const usersList = userResponse as User[];
        users.value = usersList;
  
        console.log(userResponse)
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
  
    return {
      users,
      fetchUsers,
    };
  };