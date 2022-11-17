<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useI18n } from 'vue-i18n'
import MainLayout from '../src/layouts/MainLayout.vue'
import { ElConfigProvider } from 'element-plus'
import fr from 'element-plus/lib/locale/lang/fr'
import en from 'element-plus/lib/locale/lang/en'
import { computed } from 'vue'

const { t, locale } = useI18n({})

const currentLang = computed(() => {
    if (locale.value === 'en') {
        return en
    } else {
        return fr
    }
})

console.log(locale.value)
</script>

<template>
    <MainLayout />
    <main>
        <form>
            <label>Language</label>
            {{ locale }}
            <select v-model="locale">
                <option value="en">Anglais</option>
                <option value="fr">Français</option>
            </select>
        </form>
        <p>{{ t('welcome') }}</p>
        <el-config-provider :locale="currentLang">
            <router-view />
        </el-config-provider>
    </main>
</template>

<style lang="css">
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
main {
    margin-top: 20px;
    padding-inline: 50px;
    line-height: 35px;
}
</style>
