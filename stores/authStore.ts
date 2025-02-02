import { defineStore } from 'pinia'

interface AuthStoreState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthStoreState => ({
    token: null
}),
  actions: {
    async login(username: string, password: string) {
      try {
        if (username !== 'Daptee' || password !== 'Daptee2025') throw Error('Credenciales incorrectas');
        
        // En este momento podriamos hacer una petición a un servidor para obtener el token de autenticación
        // A fines practicos el token lo generamos nosotros y lo guardamos en el localStorage
        const exampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        localStorage.setItem('auth-token', exampleToken);
        this.token = exampleToken;
      } catch (error) {
        throw error;
      }
    },
    logOut() {
      localStorage.removeItem('auth-token');
    }
  },
  getters: {
    isAuthenticated: (state) => Boolean(state.token)
  }
})