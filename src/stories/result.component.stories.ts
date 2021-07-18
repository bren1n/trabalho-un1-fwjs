import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultComponent } from 'src/app/result.component';

export default {
  title: 'Voting/Result',
  component: ResultComponent,
} as Meta;

const Template: Story<ResultComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { name: 'Sim', votes: 6 },
    { name: 'Não', votes: 3 },
  ],
}