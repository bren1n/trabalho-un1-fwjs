import App from '../App.vue';

export default {
  title: 'Voting/App',
  component: App,
};

const Template = (args, {argTypes}) => ({
  components: { App },
  props: Object.keys(argTypes),
  template: '<App v-bind="$props" v-on="$props"/>',
});

export const Default = Template.bind({});