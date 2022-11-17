import { Story } from '@storybook/vue3';
import Spinner from './Spinner.vue';

export default {
  title: 'Spinner',
  component: Spinner,

  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'info', 'warning', 'danger'],
      },
    },
    opacity: {
      control: { type: 'select', options: ['transparent', 'opaque'] },
    },
  },
};

const Template = (args: any) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />',
});

export const Normal : Story = Template.bind({});
Normal.args = {
  type: 'primary',
  size: 'medium',
  opacity: 'opaque',
};
