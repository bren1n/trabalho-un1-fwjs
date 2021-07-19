import Card from '../components/Card.vue';

export default {
    title: 'Voting/Card',
    component: Card,
    argTypes: {
        state: {
            control: {
                type: 'radio',
                options: ['open', 'closed']
            }
        },
        vote: {action: "vote"},
    }
};

const Template = (args, { argTypes }) => ({
    components: { Card },
    props: Object.keys(argTypes),
    template: '<Card v-bind="$props" v-on="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
    state: 'open',
    title: 'Esse é um projeto Vue?',
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}],
}