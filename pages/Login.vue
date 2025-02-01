<template>
    <form @submit.prevent="login" class="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
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
        <button
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Login
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
    console.log('Logging in:', { username: username.value, password: password.value });
};
</script>