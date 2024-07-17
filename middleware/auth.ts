import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to) => {
    const { isLoggedIn } = storeToRefs(useSessionStore())

    if (!isLoggedIn.value && to.path !== '/login') {
        return navigateTo('/login')
    }
})
