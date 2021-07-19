import Booth from '../Booth';

export default {
    component: Booth,
    title: 'Voting/Booth',
    argTypes: {onVote: {action: 'vote'}}
};

const Template = (args) => <Booth {...args}/>

export const Default = Template.bind({});

Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
};