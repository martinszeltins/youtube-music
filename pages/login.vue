<template>
    <div class="h-screen flex items-center justify-center">
        <div class="shadow-lg rounded-md p-4 w-[450px]">
            <h1 class="font-semibold text-2xl text-center">Login</h1>

            <p class="text-red-500 text-center mt-2">{{ error }}</p>

            <form @submit.prevent="login" class="mt-2">
                <!-- Username -->
                <input
                    v-model="username"
                    type="text"
                    placeholder="Username"
                    class="w-full p-2 border border-gray-300 rounded-md mt-2"
                />

                <!-- Password -->
                <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="w-full p-2 border border-gray-300 rounded-md mt-2"
                />

                <button type="submit" class="rounded-md px-4 py-2 shadow bg-gray-200 mt-4 w-full hover:bg-gray-300">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia'

    definePageMeta({ layout: 'auth' })

    const username = ref('')
    const password = ref('')
    const error = ref('')

    const { username: storeUsername, isLoggedIn } = storeToRefs(useSessionStore())

    const login = () => {
        error.value = ''

        if (username.value === 'admin' && password.value === 'admin') {
            storeUsername.value = username.value
            isLoggedIn.value = true

            return navigateTo('/')
        } else {
            error.value = 'Invalid username or password'
        }
    }
</script>
