<template>
    <h1>Profile page</h1>
    <div>
        <p>
            <strong> {{ t('profile.firstName') }}</strong
            >:EVAN
        </p>
        <p>
            <strong>{{ t('profile.lastName') }}</strong
            >:YU
        </p>
    </div>
    <HelloWorld />
</template>
<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { t } from '@/core/i18n/translate'
</script>
