<template>
    <nav>
        <ul class="menu">
            <router-link to="/"><li class="menu-item">Home</li></router-link>

            <router-link to="/profile"
                ><li class="menu-item">Profile</li></router-link
            >

            <router-link to="/todos"
                ><li class="menu-item">Todos</li></router-link
            >
            <router-link to="/calender"
                ><li class="menu-item">Calender</li></router-link
            >
        </ul>
    </nav>
</template>
<style scoped lang="scss">
.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #000;
    list-style: none;
    margin-top: 0;
    height: 70px;
    .menu-item {
        cursor: pointer;
    }
    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }
}
</style>
