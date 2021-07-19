import Result from '../components/Result.vue';

export default {
    component: Result,
    title: 'Voting/Result'
};

const Template = (args, { argTypes }) => ({
    components: { Result },
    props: Object.keys(argTypes),
    template: '<Result v-bind="$props" v-on="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}],
}
