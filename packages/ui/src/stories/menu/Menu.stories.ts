import { Story } from '@storybook/vue3';
import ElMenu from './ELMenu.vue';
import ElSideBar from './ElSideBar.vue';

export default {
  title: 'Menu',
  component: ElMenu,
  argTypes: {
    mode: { control: { type: 'select', options: ['horizontal', 'vertical'] }, description: 'menu display mode' },
    textColor: { control: 'color', description: 'text color of Menu (hex format)' },
    backgroundColor: { control: 'color' },
    activeTextColor: { control: 'color', description: 'text color of currently active menu item (hex format)' },
    'default-active': { description: 'index of currently active menu' },
    disabled: { control: 'boolean', description: 'whether the sub-menu is disabled' },
    collapse: { description: 'whether the menu is collapsed (available only in vertical mode)' },
  },
};

const TopBarTemplate = (args: any) => ({
  components: { ElMenu },
  setup() {
    return { args };
  },
  template: `<ElMenu :mode="args.mode" 
  :backgroundColor='args.backgroundColor'
  :textColor='args.textColor' 
  :activeTextColor='args.activeTextColor'
  :disabled="args.disabled" />
  `,
});

export const TopBar: Story = TopBarTemplate.bind({});
TopBar.args = {
  mode: 'horizontal',
  backgroundColor: '#ffffff',
  textColor: '#303133',
  activeTextColor: '#409EFF',
  disabled: false,
};

// Side bar

const SideBarTemplate = (args: any) => ({
  components: {
    ElSideBar,
  },
  setup() {
    return {
      args,
    };
  },
  template: `<ElSideBar :backgroundColor='args.backgroundColor'
  :textColor='args.textColor' 
  :activeTextColor='args.activeTextColor'
  :disabled="args.disabled" />`,
});
export const SideBar: Story = SideBarTemplate.bind({});
SideBar.args = {
  ...TopBar.args,
  mode: 'vertical',
};
