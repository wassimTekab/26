<template>
    <h1>Home page : {{ name }}</h1>
    <!-- <button @click="reset">Reset</button> -->
    <el-button type="danger" @click="resetCounter">Reset</el-button><br />
    <!-- <button @click="increment">+</button> -->
    <el-button type="primary" @click="add(10)">+</el-button>
    <h2>{{ counter }}</h2>
    <h2>{{ doubleCount }}</h2>
    <el-button type="primary" @click="counterStore.decrement">-</el-button>
    <div>
        <el-button type="success" round @click="updateState">update</el-button>
    </div>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/store/useCounter'
import { mapActions, storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { counter, name, doubleCount } = storeToRefs(counterStore)
const { increment, reset } = counterStore
// const { increment, decrement } = mapActions(useCounterStore, [
//     'increment',
//     'decrement',
// ])

// update state
function add(newValue: number) {
    // counterStore.$patch({
    //     counter: counter.value + newValue,
    // })
    counterStore.$patch((state) => (state.counter += newValue))
}

// Reset state
function resetCounter() {
    counterStore.$reset()
}

// subsription
counterStore.$subscribe((mutation, state) => {
    console.log({ mutation })
    console.log({ state })
})

// update state
function updateState() {
    counterStore.$state = { name: 'test2', counter: 100 }
}
</script>
