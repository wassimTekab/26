import { ElCarousel, ElCarouselItem } from 'element-plus';
import './carousel.css';

export default {
  title: 'Carousel',
  component: ElCarousel,

  argTypes: {
    trigger: { control: { type: 'select', options: ['hover', 'click'] }, description: 'type of the Carousel' },
    autoplay: { control: 'boolean', description: 'whether automatically loop the slides' },
    interval: { control: 'number', description: 'interval of the auto loop, in milliseconds' },
    'indicator-position': { control: { type: 'select', options: ['outside', 'none'] }, description: 'position of the indicators' },
    arrow: { control: { type: 'select', options: ['always', 'hover', 'never'] }, description: 'when arrows are shown' },
    type: { description: 'type of the Carousel' },
    direction: { control: { type: 'select', options: ['horizontal', ' vertical'] }, description: 'display direction' },
  },
};

const Template = (args: any) => ({
  components: { ElCarousel, ElCarouselItem },
  setup() {
    return { args };
  },
  template: `<el-carousel v-bind="args" >
  <el-carousel-item v-for="item in 4" :key="item">
  <h3 >{{ item }}</h3>
  </el-carousel-item>
  </el-carousel>
  `,
});

export const Normal :Story = Template.bind({});
Normal.args = {
  trigger: 'click',
  autoplay: false,
  interval: 3000,
  arrow: 'always',
};
export const CardCarousel :Story = Template.bind({});
CardCarousel.args = {
  ...Normal.args,
  'indicator-position': 'outside',
  type: 'card',
};

export const VerticalCarousel :Story = Template.bind({});
VerticalCarousel.args = {
  ...Normal.args,
  arrow: 'never',
  direction: 'vertical',
};
