<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Card from '../Card.svelte';
</script>

<Meta title="Voting/Card" component={Card}/>

<Template let:args>
    <Card {...args}/>
</Template>

<Story name="Default" args={{options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}], title: 'Isso é um projeto Svelte?', state: 'open'}}/>