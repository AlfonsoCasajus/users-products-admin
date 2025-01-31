<template>
    <div class="border-2 min-h-screen bg-[#3BCDBD]">
        <Navbar />
        <div class="flex h-screen">
            <Sidebar />
            <div class="p-4 w-full scroll-auto rounded-tl-xl bg-white">
                <slot />
            </div>
        </div>
    </div>
</template>