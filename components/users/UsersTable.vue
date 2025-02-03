<template>
    <div class="overflow-hidden w-full">
        <table class="w-full">
            <thead class="bg-[#2e3338c2] text-white">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
                <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Usuario</th>
                <th scope="col" class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium uppercase tracking-wider text-center">Acciones</th>
            </tr>
            </thead>
            <TransitionGroup
                tag="tbody"
                 :css="false"
                 @before-enter="onBeforeEnter"
                 @enter="onEnter"
                 @leave="onLeave"
                 class="bg-dark-primary text-light-primary"
            >
                <tr v-for="(user, index) in users"
                    :key="user.id"
                    :data-index="index"
                    class="table-row hover:bg-[#30373d6e]"
                >
                    <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
                    <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
                    <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
                    <td class="px-6 py-4 flex items-center justify-center">
                        <v-btn :icon="IconDots" variant="tonal" size="small" rounded="xl">
                            <IconDots size="24" />
                            <v-menu activator="parent">
                            <v-list>
                                <v-list-item value="details" @click="$emit('details', user)">
                                    <v-list-item-title class="flex items-center gap-2"><IconEye />Ver</v-list-item-title>
                                </v-list-item>
                                <v-list-item value="delete" @click="$emit('delete', user)">
                                    <v-list-item-title class="flex items-center gap-2"><IconTrash />Eliminar</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                        </v-btn>
                    </td>
                </tr>
            </TransitionGroup>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { IconDots, IconTrash, IconEye } from '@tabler/icons-vue';
import type { User } from '~/types/user';
import { gsap } from "gsap";

defineProps({
    users: {
        type: Array as () => User[],
        required: true
    }
});

defineEmits(['delete', 'details']);

// Transitions and animations
onMounted(() => {
  gsap.from(['table', '.table-row'], {
    y: 10,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "ease.out",
  });
});

const { onBeforeEnter, onEnter, onLeave } = useTransitions()

</script>
