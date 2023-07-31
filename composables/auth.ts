import { UserCredentials } from "types/auth"
export const useAuth = () => {

    const user = useSupabaseUser()
    const client = useSupabaseAuthClient()


    const isAuthenticated = computed(() => {
        return user.value !== null
    })

    async function login(credentials: UserCredentials) {
        const { data, error } = await client.auth.signInWithPassword(credentials)
        if (error) throw error
        return data.user
    }

    async function logout() {
        const { error } = await client.auth.signOut()
        if (error) throw error
    }

    async function register(credentials: UserCredentials) {
        const { data, error } = await client.auth.signUp(credentials)
        try {
            await fetch('/api/user', {
                method: "POST",
                body: JSON.stringify({
                    id: data.user?.id
                }),
            })
        } catch (error) {
            console.log("while creating user inside prisma", error)
        }
        if (error) throw error
    }

    return {
        isAuthenticated,
        user,
        login,
        logout,
        register
    }
}