<h1>{title}</h1>
{#each options as option, index (option.name)}
    <button class="button" on:click="{dispatcher('vote', index)}">{option.name}</button>
{/each}

<script>
    import { createEventDispatcher } from 'svelte'

    export let options
    export let title

    const dispatcher = createEventDispatcher()
</script>

<style>
    .button {
        margin-right: 10px;
    }
</style>