import '../src/stories/assets/global/_global.scss';

import ThemeProviderVue from '../src/themeProvider/ThemeProvider.vue';
import { withSource } from './withSource';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  primary: { control: { type: 'color' }, description: 'primary color', defaultValue: '#7239EA' },
  success: { control: { type: 'color' }, description: 'success color', defaultValue: '#67C23A' },
  warning: { control: { type: 'color' }, description: 'warning color', defaultValue: '#E6A23C' },
  danger: { control: { type: 'color' }, description: 'danger color', defaultValue: '#F56C6C' },
  error: { control: { type: 'color' }, description: 'error color', defaultValue: '#f56c6c' },
  info: { control: { type: 'color' }, description: 'info color', defaultValue: '#909399' },
  background: { control: { type: 'color' }, description: 'background color', defaultValue: '#2B2D32' },
  color: { control: { type: 'color' }, description: 'text color', defaultValue: '#ffffff' },
};

export const decorators = [(story, context) => ({
  components: { story, ThemeProviderVue },
  setup() {
    return { context };
  },

  template: `<ThemeProviderVue :theme="context.globals" >
  <story :theme="context.globals" /></ThemeProviderVue>`,
}), withSource];
