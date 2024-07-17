<template>
    <div>
        <!-- Header -->
        <header class="flex justify-between p-2 shadow-md">
            <h1 class="font-medium pt-2">YouTube Music</h1>

            <div
                @click="isUserMenuVisible = !isUserMenuVisible"
                class="rounded-full size-10 bg-blue-50 flex justify-center items-center font-medium hover:ring-2 hover:ring-blue-300 cursor-pointer">
                {{ usernameInitials }}
            </div>

            <!-- User menu -->
            <div v-if="isUserMenuVisible" class="absolute right-2 top-12 bg-white shadow-md rounded-md p-2">
                <p>{{ username }}</p>
                <button @click="navigateTo('/settings')" class="text-blue-500">Settings</button>
                <button @click="logout" class="text-red-500">Logout</button>
            </div>
        </header>

        <slot></slot>

        <!-- Floating mini music player at the bottom of the page -->
        <div class="fixed bottom-2 left-1 p-2 shadow-md bg-black text-white rounded-md w-full">
            <div class="flex justify-between items-center">
                <div class="flex gap-2">
                    <img src="https://via.placeholder.com/50" alt="Song cover" class="rounded-md" />

                    <div>
                        <p class="font-medium">{{ playingSongName }}</p>
                        <p class="text-gray-500">Playing now</p>
                    </div>
                </div>

                <div class="flex gap-2">
                    <button class="rounded-full size-10 bg-gray-200 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button class="rounded-full size-10 bg-gray-200 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia'
    
    const { playingSongName } = storeToRefs(useMusicPlayerStore())
    const { username } = storeToRefs(useSessionStore())

    const isUserMenuVisible = ref(false)

    const usernameInitials = computed(() => {
        return username.value.slice(0, 2).toUpperCase()
    })

    const logout = () => {
        location.href = '/login'
    }
</script>
