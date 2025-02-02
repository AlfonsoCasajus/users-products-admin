<template>
    <div class="flex justify-evenly min-h-screen bg-[#212529] flex-wrap">
        <div class="flex flex-col items-center justify-center gap-4">
            <NuxtImg src="logoDaptee.svg" alt="Logo" height="100" format="webp" quality="80" />
            <div class="w-full kaka">
                <v-btn to="/users" type="submit" variant="outlined" color="info" rounded="xl" width="100%">
                    Usuarios
                </v-btn>
            </div>
            <div class="w-full kaka">
                <v-btn  to="/products" variant="outlined" color="info" rounded="xl" width="100%">
                    Productos
                </v-btn>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
            <div class="flex items-center gap-3">
                <v-avatar image="public/profileImg.jpeg" size="32" />
                <span class="text-[#f8f9fa]">Daptee</span>
                <v-btn variant="tonal" color="info" size="small" rounded="xl">
                    <IconChevronDown size="24" />
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item disabled value="settings">
                                <v-list-item-title class="flex items-center gap-2">
                                    <IconSettings />
                                    Mi Cuenta
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item value="logout" @click="logout">
                                <v-list-item-title class="flex items-center gap-2">
                                    <IconLogout /> Cerrar Sesión
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
            <div>
                <v-text-field
                    value="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    hide-details
                    single-line
                />
            </div>
            <slot v-if="true" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IconSettings, IconLogout, IconChevronDown } from '@tabler/icons-vue';
import { gsap } from "gsap";

const buttonRef = ref(null);

onMounted(() => {
  gsap.fromTo(
    '.kaka',
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
  );
});

// Desconectar al usuario de la plataforma
const auth = useAuth()
const logout = () => {
    auth.logOut();
};
</script>