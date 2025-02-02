export default defineNuxtRouteMiddleware((to, from) => {

 const authToken = localStorage.getItem('auth-token');
 const isAuthenticated = Boolean(authToken);

  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  } else if (isAuthenticated && to.path === '/login') {
    return navigateTo('/users');
  }
});
