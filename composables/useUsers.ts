import type { User } from "~/types/user";

export const useUsers = () => {
    const users = ref<User[]>([]);

    const isLoadingUsers = ref(false);
  
    // Buscar a los usuarios
    const fetchUsers = async () => {
      isLoadingUsers.value = true;
      try {
         const userResponse = await $fetch('https://jsonplaceholder.typicode.com/users');
         const usersList = userResponse as User[];
         users.value = usersList;
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
      isLoadingUsers.value = false;
    };

    // Eliminar un usuario
    const deleteUser = async (userId: number) => {
        users.value = users.value.filter((user) => user.id !== userId);
    };

  
    return {
      users,
      isLoadingUsers,
      fetchUsers,
      deleteUser,
    };
  };