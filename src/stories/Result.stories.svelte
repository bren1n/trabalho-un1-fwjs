<script>
      import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
      import Result from '../Result.svelte';
</script>

<Meta title="Voting/Result" component={Result}/>

<Template let:args>
    <Result {...args}/>
</Template>

<Story name="Default" args={{
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]}}/>