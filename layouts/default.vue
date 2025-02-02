<template>
    <div class="flex justify-evenly min-h-screen bg-[#212529] text-[#f8f9fa]">
        <div class="flex flex-col items-center justify-center gap-4">
            <NuxtImg src="logoDaptee.svg" alt="Logo" height="100" format="webp" quality="80" />
            <div class="w-full kaka">
                <v-btn to="/users" type="submit" variant="outlined" color="info" rounded="xl" size="large" width="100%">
                    Usuarios
                </v-btn>
            </div>
            <div class="w-full kaka">
                <v-btn to="/products" variant="outlined" color="info" rounded="xl" size="large" width="100%">
                    Productos
                </v-btn>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-6 w-full max-w-[700px]">
            <div class="flex items-center gap-3">
                <v-avatar image="public/dapteeHead.png" size="64" />
                <span class="text-[#f8f9fa] text-2xl">Daptee</span>
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
            <section>
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
const filterQuery = ref('')
</script>