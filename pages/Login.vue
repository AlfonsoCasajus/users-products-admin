<template>
    <section class="h-full flex gap-5 bg-[#1A202C] p-12!">
        <div class="w-full flex flex-col gap-3 items-center justify-center">
            <NuxtImg src="logoDaptee.svg" alt="Logo" height="100" format="webp" quality="80" />
            
            <form @submit.prevent="login" class="text-[#f8f9fa] w-full max-w-[500px] flex flex-col gap-3 p-6">
                <v-text-field
                    v-model="username"
                    clearable
                    label="Usuario"
                    placeholder="Ej: Daptee"
                    :prepend-icon="IconUser"
                    hint="Daptee"
                />
                <v-text-field
                    v-model="password"
                    :append-inner-icon="isPasswordVisible ? IconEye : IconEyeClosed"
                    :prepend-icon="IconLock"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    hint="Daptee2025"
                    label="Contraseña"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <v-btn type="submit" variant="tonal" color="info" rounded="xl">
                    Ingresar
                </v-btn>
            </form>
        </div>
        <div class="hidden sm:flex flex-col items-center justify-center gap-4 w-full bg-[#ffffff] rounded-xl text-center shadow-lg p-4!">
            <h1 class="text-5xl">Inicia Sesión</h1>
            <p class="max-w-2/3 text-xl">
                Para administrar tus usuarios y productos, deberás primero ingresar a la plataforma con tu nombre de usuario y contraseña.
            </p>
            <NuxtImg src="loginBg.jpg" alt="Background" width="400" height="400" format="webp" quality="80" class="hidden md:inline" />
            <small class="font-bold">Usuario: Daptee, Contraseña: Daptee2025</small>
            <v-btn variant="tonal" size="small" rounded="xl" @click="fillCredentials">
                <IconPencil size="24" />
                Pegar credenciales
            </v-btn>
        </div>
    </section>
</template>

<script setup lang="ts">
import { IconUser, IconEye, IconEyeClosed, IconLock, IconPencil } from '@tabler/icons-vue';
import { useAuth } from '~/composables/useAuth';

definePageMeta({
  layout: false
})

const username = ref('');
const password = ref('');
const isPasswordVisible = ref(false);

const auth = useAuth()

const login = () => {
    auth.logIn(username.value, password.value);
};

const fillCredentials = () => {
    username.value = 'Daptee';
    password.value = 'Daptee2025';
};
</script>