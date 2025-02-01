<template>
    <div class="h-full bg-[#212529] p-4
        transition-all
        duration-300
        ease-in-out"
        :class="{'w-16': !isExpanded, 'w-32': isExpanded}"
    >
        <button @click="handleExpansion">
            <IconChevronLeft v-if="isExpanded" size="32"/>
            <IconChevronRight v-else size="32"/>
        </button>
        <ul>
            <nuxt-link to="/users" class="text-[#f8f9fa] hover:text-[#3bcdbd]">
                <li class="flex mb-4 items-center gap-2">
                    <IconUsers size="32"/>
                </li>
            </nuxt-link>

            <nuxt-link to="/products" class="text-[#f8f9fa] hover:text-[#765cf3]">
                <li class="flex mb-4 items-center gap-2">
                    <IconBox size="32"/>
                </li>
            </nuxt-link>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { IconBox, IconUsers, IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';

const isExpanded = ref(false);

const handleExpansion = () => {
    isExpanded.value = !isExpanded.value;
}

</script>
