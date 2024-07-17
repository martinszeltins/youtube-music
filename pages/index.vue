<template>
    <div class="p-10 w-full">
        <div class="w-full flex gap-5">
            <div
                v-for="n in 5"
                @click="playSong(`Beach Boys #${n}`)"
                class="rounded-md shadow-md bg-black text-gray-200 size-64 flex justify-center items-center hover:bg-neutral-700 cursor-pointer">
                Beach Boys #{{ n }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia'

    definePageMeta({ middleware: 'auth', layout: 'default' })

    const { playingSongName } = storeToRefs(useMusicPlayerStore())

    const playSong = (song: string) => {
        playingSongName.value = song
    }
</script>
