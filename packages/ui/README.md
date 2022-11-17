# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# Storybook Plugin: @tekab-dev-team/storybook-devfactory

Vue 3 plugin contains a theme provider and a set of components.

## Registry setup: Configure .npmrc

`echo @tekab-dev-team:registry=https://gitlab.com/api/v4/packages/npm/ >> .npmrc`

then add this line to the .npmrc file and change My_token by a gitlab authentication token
`//gitlab.com/api/v4/packages/npm/:_authToken=<My_token>`
## Install package

`npm i @tekab-dev-team/storybook-devfactory`

## Local usage

**app.vue**

```
<template>
  <el-button type="primary">Primary</el-button>
  <theme-provider :theme="theme">
    <el-button type="primary">Primary</el-button>
  </theme-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ThemeProvider, Components } from "@tekab-dev-team/storybook-devfactory";
export default defineComponent({
  components: { ThemeProvider, ...Components },
  setup() {
    const theme = ref({
      primary: "#B8255F", // Your primary color
      success: "#7ECC49", // Your success color
      warning: "#B8255F", // Your warning color
      info: "#96C3EB", // Your info color
      error: "#96C3EB", // Your error color
      danger: "#96C3EB", // Your danger color
    });
    return { theme };
  },
});
</script>
<style lang="scss">
@use "@tekab-dev-team/storybook-devfactory/theme/style.css" as *;
</style>
```

## Global usage

**main.js**

```
import { createApp } from "vue";
import { Components, ThemeProvider, IconsVue } from "@tekab-dev-team/storybook-devfactory";

const app = createApp(App);
app.use(Components);
for (const [key, component] of Object.entries(IconsVue)) {
  app.component(key, component);
}
app.component("theme-provider", ThemeProvider);
app.mount("#app");
```

**app.vue**

```
<template>
  <el-button type="primary" icon="Edit">Primary</el-button>
  <theme-provider :theme="theme">
    <el-button type="primary">Primary</el-button>
  </theme-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const theme = ref({
      primary: "#B8255F", // Your primary color
      success: "#7ECC49", // Your success color
      warning: "#B8255F", // Your warning color
      info: "#96C3EB", // Your info color
      error: "#96C3EB", // Your error color
      danger: "#96C3EB", // Your danger color
    });
    return { theme };
  },
});
</script>
<style lang="scss">
@use "@tekab-dev-team/storybook-devfactory/theme/style.css" as *;
</style>
```
