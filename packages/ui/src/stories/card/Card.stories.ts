import { ElCard } from 'element-plus';
import { Story } from '@storybook/vue3';

export default {
  title: 'Card',
  component: ElCard,
  argTypes: {
    header: {
      description:
        'string | title of the card. Also accepts a DOM passed by slot #header ',
      control: 'text',
    },
    'body-style': {
      description: 'object | CSS style of body',
      control: 'object',
    },
    shadow: {
      description: 'string | when to show card shadows',
      control: {
        type: 'select',
        options: ['always', 'hover', 'never'],
      },
    },
  },
};

const Template = (args: any) => ({
  components: { ElCard },
  setup() {
    return { args };
  },
  template: `
    <el-card v-bind='args' style='width: 480px;'>
        <div v-for='o in 4' :key='o' style='{font-size: 14px; padding: 14px 0;}'>{{ 'List item ' + o }}</div>
    </el-card>
    `,
});
const TemplateImageCard = (args: any) => ({
  components: { ElCard },
  setup() {
    return { args };
  },
  template: `
    <el-card v-bind='args' style='{overflow:auto;float:left;}'>
    <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class='image'
        />
        <div style='padding: 14px'> <h1> hamburger </h1> </div>
    </el-card>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  header: 'Card Name',
  shadow: 'hover',
  'body-style': { padding: '20px' },
};
export const ImageCard: Story = TemplateImageCard.bind({});
ImageCard.args = {
  shadow: 'always',
  'body-style': { padding: '0px' },
};
