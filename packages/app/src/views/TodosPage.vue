<template>
    <h1>Todos Page</h1>
    <h3 v-if="isLoading">Loading....</h3>
    <ul v-else>
        <li v-for="(todo, index) in todos" :key="index">{{ todo.title }}</li>
    </ul>
</template>

<style scoped></style>
<script setup lang="ts">
// import { mapState, mapActions } from 'pinia'

import { useTodosStore } from '@/store/useTodos'
import { storeToRefs } from 'pinia'

// vue 2 syntax
// computed: {
//     ...mapState(useTodos, { todos: 'todos' }),
// },
// methods: {
//     ...mapActions(useTodos, ['fetchTodos']),
// },
// created() {
//     // when the template is created, we call this action
//     this.fetchTodos()
// },

const todosStore = useTodosStore()
const { todos, isLoading } = storeToRefs(todosStore)
const { fetchTodos } = todosStore
fetchTodos()
</script>
