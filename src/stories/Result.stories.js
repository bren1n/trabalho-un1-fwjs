import Result from '../Result';

export default {
    component: Result,
    title: 'Voting/Result',
};

const Template = (args) => <Result {...args}/>

export const Default = Template.bind({});

Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
};