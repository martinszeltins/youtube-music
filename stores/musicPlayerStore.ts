import { defineStore } from 'pinia'

export const useMusicPlayerStore = defineStore('musicPlayer', () => {
    const playingSongName = ref('')
  
    return { playingSongName }
  })
