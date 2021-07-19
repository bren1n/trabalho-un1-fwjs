import Card from '../Card.js';

export default {
    component: Card,
    title: 'Voting/Card',
    argTypes: {
        state: {
            options: ['open', 'closed'],
            control: {type: 'radio'}
        }
    }
}

const Template = (args) => <Card {...args}/>

export const Default = Template.bind({});

Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}],
    title: 'Isso é um projeto React?',
    state: 'open'
};