<template>
    <nav class="bg-[#212529] p-2">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <NuxtImg src="dapteeHead.png" alt="Logo" width="50" height="50" format="webp" quality="80" />
            </div>
            <div class="flex items-center space-x-4">
                <nuxt-link to="/login" class="text-gray-800 hover:text-blue-500">Salir</nuxt-link>
            </div>
        </div>
    </nav>
</template>
