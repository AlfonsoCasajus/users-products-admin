<template>
    <div class="h-full bg-[#3BCDBD] p-4">
        <ul>
            <li class="mb-4">
                <nuxt-link to="/users" class="text-gray-800 hover:text-blue-500"><IconUsers size="32"/></nuxt-link>
            </li>
            <li class="mb-4">
                <nuxt-link to="/products" class="text-gray-800 hover:text-blue-500"><IconBox size="32"/></nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { IconBox, IconUsers } from '@tabler/icons-vue';
</script>
