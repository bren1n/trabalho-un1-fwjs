import Booth from '../components/Booth.vue';

export default {
    component: Booth,
    title: 'Voting/Booth',
    argTypes: {
        vote: {action: "vote"},
    }
};

const Template = (args, { argTypes }) => ({
    components: { Booth },
    props: Object.keys(argTypes),
    template: '<Booth v-bind="$props" v-on="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}],
}