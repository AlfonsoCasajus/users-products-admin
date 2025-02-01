export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = true;

  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }
});
