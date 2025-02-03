<template>
    <div class="flex flex-col items-center lg:flex-row justify-evenly min-h-screen lg:h-screen bg-dark-primary text-light-primary p-6!">
        <div class="w-full self-center max-w-[400px] flex flex-col items-center justify-center gap-4">
            <NuxtImg src="logoDaptee.svg" alt="Logo" height="100" format="webp" quality="80" />
            <div class="w-full">
                <v-btn to="/users" type="submit"
                    :variant="$route.path === '/users' ? 'elevated' : 'outlined'"
                    color="info"
                    rounded="xl"
                    size="large"
                    width="100%"
                >
                    Usuarios
                </v-btn>
            </div>
            <div class="w-full">
                <v-btn to="/products"
                    :variant="$route.path === '/products' ? 'elevated' : 'outlined'"
                    color="info"
                    rounded="xl"
                    size="large"
                    width="100%"
                >
                    Productos
                </v-btn>
            </div>
        </div>
        <div class="w-full h-full max-w-[800px] flex flex-col items-center gap-6">
            <div class="flex items-center gap-3">
                <v-avatar image="public/dapteeHead.png" size="64" />
                <span class="text-light-primary text-2xl">Daptee</span>
                <v-btn variant="text" :icon="IconChevronDown" size="x-small" rounded="xl">
                    <IconChevronDown size="24" />
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item disabled value="settings">
                                <v-list-item-title class="flex items-center gap-2">
                                    <IconSettings />
                                    Mi Cuenta
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item value="logout" @click="auth.logOut()">
                                <v-list-item-title class="flex items-center gap-2">
                                    <IconLogout /> Cerrar Sesión
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
            <div class="w-full">
                <v-text-field
                    v-model="filterQuery"
                    label="Filtrar por nombre"
                    :prepend-inner-icon="IconSearch"
                    variant="outlined"
                    hide-details
                    single-line
                    clearable
                    placeholder="Ej: Daptee"
                />
            </div>
            <section class="overflow-auto h-full w-full">
                <slot />
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IconSettings, IconLogout, IconChevronDown, IconSearch } from '@tabler/icons-vue';

// Desconectar al usuario de la plataforma
const auth = useAuth()

// Filtrado
const filtersStore = useFiltersStore();
const filterQuery = computed({
  get: () => filtersStore.query,
  set: (value) => filtersStore.setFilterQuery(value),
});
</script>