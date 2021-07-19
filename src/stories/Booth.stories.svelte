<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Booth from '../Booth.svelte';
</script>

<Meta title="Voting/Booth" component={Booth} argTypes={{vote: {action: 'vote'}}}/>

<Template let:args>
    <Booth {...args} on:vote={args.vote}/>
</Template>

<Story name="Default" args={{
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]}}/>