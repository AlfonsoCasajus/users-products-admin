import { useAuthStore } from "@/stores/authStore";

export const useAuth = () => {
    const router = useRouter();
    const authStore = useAuthStore()
    const snackbar = useSnackbar();
    
    // Logear al usuario
    const logIn = async (username: string, password: string) => {
       try {
         await authStore.login(username, password);
         router.push('/users');
        } catch (error) {     
         snackbar.add({
           type: 'error',
           dismissible: true,
           title: 'Ups algo fallo!',
           text: `${error}`
         })
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
         snackbar.add({
          title: 'Error',
          type: 'error',
          text: `Ups algo fallo! - ${error}`,
          dismissible: true
        })
       }
    };

    return {
        logIn,
        logOut
    };
  };