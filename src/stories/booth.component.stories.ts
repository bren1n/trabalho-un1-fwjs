import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from 'src/app/booth.component';

export default {
  title: 'Voting/Booth',
  component: BoothComponent,
} as Meta;

const Template: Story<BoothComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
}