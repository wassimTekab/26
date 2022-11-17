import { Story } from '@storybook/vue3';
import Theme from './Theme.vue';

export default {
  title: 'Theme/Theme-Provider',
  component: Theme,
};

const Template = (args: any) => ({
  components: { Theme },
  setup() {
    return { args };
  },
  template: '<Theme></Theme>',
});

export const Preview: Story = Template.bind({});
