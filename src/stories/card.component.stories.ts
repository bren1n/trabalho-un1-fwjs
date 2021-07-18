import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from "src/app/card.component";
import { ResultComponent } from 'src/app/result.component';
import { BoothComponent } from 'src/app/booth.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Voting/Card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            declarations: [ResultComponent, BoothComponent],
            imports: [CommonModule]
        })
    ],
    argTypes: {
        state: {
            control: {type: 'radio'},
            options: ['open', 'closed']
        }
    }
} as Meta;

const Template: Story<CardComponent> = (args) => ({
    props: args,
})

export const Default = Template.bind({});

Default.args = {
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}],
    state: 'open',
    title: 'Isso é um projeto Angular?'
}