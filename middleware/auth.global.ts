export default defineNuxtRouteMiddleware((to, from) => {

 const authToken = localStorage.getItem('auth-token');
 const isAuthenticated = Boolean(authToken);

 // Si no esta autenticado se lo envia al login
  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  } else if (isAuthenticated && (to.path === '/' ||  to.path === '/login')) {
    return navigateTo('/users');
  }
});
