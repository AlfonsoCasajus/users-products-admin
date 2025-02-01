<template>
    <div class="border-2 min-h-screen bg-[#212529]">
        <Navbar />
        <div class="flex h-screen">
            <Sidebar />
            <div class="p-4 w-full overflow-auto rounded-tl-xl bg-[#f8f9fa]">
                <slot />
            </div>
        </div>
    </div>
</template>