import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const isLoggedIn = ref(false)
    const username = ref('')
  
    return { username, isLoggedIn }
  })
