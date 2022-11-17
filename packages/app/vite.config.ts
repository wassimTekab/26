import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import * as path from 'path'

export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
    // https://vitejs.dev/config/
    return defineConfig({
        // To access env vars here use process.env.TEST_VAR
        server: {
            // configure vite for HMR with Gitpod
            hmr: process.env.GITPOD_WORKSPACE_URL
                ? {
                      // removes the protocol and replaces it with the port we're connecting to
                      host: process.env.GITPOD_WORKSPACE_URL.replace(
                          'https://',
                          `${process.env.VITE_PORT}-`
                      ),
                      protocol: 'wss',
                      clientPort: 443,
                  }
                : true,
        },
        plugins: [
            vue(),
            tsconfigPaths(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            vueI18n({
                // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
                // compositionOnly: false,

                // you need to set i18n resource including paths !
                include: path.resolve(__dirname, './src/core/i18n/**'),
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
              @import "./src/assets/scss/_variables.scss";
            `,
                },
            },
        },
    })
}
