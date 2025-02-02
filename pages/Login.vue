<template>
    <section class="h-full flex">
        <span class="w-full flex items-center justify-center bg-[#1A202C]">
            <form @submit.prevent="login" class="max-w-md mx-auto mt-10 p-6 rounded-lg text-[#f8f9fa]">
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        v-model="username"
                        placeholder="Me llamo..."
                        required
                        class="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-gray-400 text-white placeholder-gray-400 outline-none py-2"
                    />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        placeholder="••••••••"
                        required
                        class="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-gray-400 text-white placeholder-gray-400 outline-none py-2"
                    />
                </div>
                <v-btn type="submit" variant="tonal" color="info" rounded="xl">
                    Ingresar
                </v-btn>
            </form>
            
        </span>
        <span class="w-full bg-[url(public/bgTexture.jpg')] bg-center bg-repeat" />
    </section>
</template>

<script setup lang="ts">

import { useAuth } from '~/composables/useAuth';

definePageMeta({
  layout: false
})

const username = ref('');
const password = ref('');

const auth = useAuth()

const login = () => {
    auth.logIn(username.value, password.value);
};
</script>