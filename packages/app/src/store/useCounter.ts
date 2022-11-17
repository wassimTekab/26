import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter-store', {
    state: () => ({
        counter: 0,
        name: 'test',
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        reset() {
            this.counter = 0
        },
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
    },
})
