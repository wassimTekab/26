import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos-store', {
    state: () => {
        return {
            todos: [],
            isLoading: false,
        }
    },

    getters: {},

    actions: {
        async fetchTodos() {
            this.isLoading = true
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos'
            )
            try {
                const result = await response.json()
                this.todos = result
            } catch (err) {
                this.todos = []
                console.error('Error loading TODOS', err)
                return err
            }

            this.isLoading = false
        },
    },
})
