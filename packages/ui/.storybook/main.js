module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions', 'storybook-addon-designs', '@storybook/addon-a11y', '@luigiminardim/storybook-addon-globals-controls', '@storybook/addon-storysource'],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    // handle websocket when open in gitpod web version
    // eslint-disable-next-line no-param-reassign
    if (process.env.EDITOR === '/ide/bin/remote-cli/gitpod-code') { config.server.hmr.port = 443; }
    return config;
  },

};
