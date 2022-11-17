# Vue 3 Plugin: @tekab-dev-team/storybook-devfactory

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
