<template>
    <div>
        <form @submit.prevent="save">
            <h1>Settings</h1>

            <!-- Form Saved Successfully -->
            <p v-if="isSaved" class="text-green-500">Settings saved successfully</p>

            <!-- Username -->
            <input
                v-model="settingsForm.username"
                type="text"
                placeholder="Username"
                class="w-full p-2 border border-gray-300 rounded-md mt-2"
            />

            <!-- Username validation message -->
            <p v-if="!!v$.username?.required?.$message" class="text-red-500">
                {{ v$.username?.$errors?.[0]?.$message }}
            </p>

            <!-- Password -->
            <input
                v-model="settingsForm.password"
                type="password"
                placeholder="Password"
                class="w-full p-2 border border-gray-300 rounded-md mt-2"
            />

            <!-- Password validation message -->
            <p v-if="!!v$.password?.required?.$message" class="text-red-500">
                {{ v$.password?.$errors?.[0]?.$message }}
            </p>

            <!-- Password Repeat -->
            <input
                v-model="settingsForm.passwordRepeat"
                type="password"
                placeholder="Repeat Password"
                class="w-full p-2 border border-gray-300 rounded-md mt-2"
            />

            <!-- Password Repeat validation message -->
            <p v-if="!!v$.passwordRepeat?.required?.$message" class="text-red-500">
                {{ v$.passwordRepeat?.$errors?.[0]?.$message }}
            </p>

            <!-- Save Button -->
            <button type="submit" class="rounded-md px-4 py-2 shadow bg-gray-200 mt-4 w-full hover:bg-gray-300">
                Save
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { useVuelidate } from '@vuelidate/core'
    import { required } from '@vuelidate/validators'

    definePageMeta({ middleware: 'auth', layout: 'default' })

    const isSaved = ref(false)

    const settingsForm = reactive({
        username: '',
        password: '',
        passwordRepeat: '',
    })

    const formRules = {
        username: { required },
        password: { required },
        passwordRepeat: { required },
    }

    const v$ = useVuelidate(formRules, settingsForm)

    const save = async () => {
        isSaved.value = false

        // Validate the form
        if (!await v$.value.$validate()) {
            return
        }

        isSaved.value = true
    }
</script>
