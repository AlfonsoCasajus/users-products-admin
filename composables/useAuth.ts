import { useAuthStore } from "@/stores/authStore";
export const useAuth = () => {
    const router = useRouter();
    const authStore = useAuthStore()
    
    // Logear al usuario
    const logIn = async (username: string, password: string) => {
       try {
         await authStore.login(username, password);
         router.push('/users');
       } catch (error) {     
         console.error('Error while login: ', error);
       }
    };

    // Cerrar sesion del usuario y redirigir a la pagina de login
    const logOut = async () => {
       try {
         authStore.logOut();
         router.push('/login');
       } catch (error) {     
         console.error('Error in logout: ', error);
       }
    };

    return {
        logIn,
        logOut
    };
  };