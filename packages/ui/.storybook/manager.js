import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import img from '../public/logo-devfactory.svg';

const theme = create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://studio.devfactory.ai/',
  brandImage: img,
});

addons.setConfig({
  theme,
});
