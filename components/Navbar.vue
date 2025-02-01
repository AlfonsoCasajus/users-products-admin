<template>
    <nav class="bg-[#212529] p-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <NuxtImg src="dapteeHead.png" alt="Logo" width="50" height="50" format="webp" quality="80" />
            </div>
            <div class="flex items-center gap-3">
                <v-avatar image="public/profileImg.jpeg" size="32" />
                <span class="text-[#f8f9fa]">Alfonso Casajus</span>
                <v-btn variant="tonal" color="info" size="small" rounded="xl">
                    <IconChevronDown size="24" />
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item disabled value="settings">
                                <v-list-item-title class="flex items-center gap-2">
                                    <IconSettings />
                                    Perfil
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item value="logout">
                                <nuxt-link to="/login" >
                                    <v-list-item-title class="flex items-center gap-2">
                                        <IconLogout />Salir
                                    </v-list-item-title>
                                </nuxt-link>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { IconSettings, IconLogout, IconChevronDown } from '@tabler/icons-vue';
</script>
