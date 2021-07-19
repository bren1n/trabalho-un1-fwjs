{#each options as option, index (option.name)}
    <button class="button" on:click="{dispatcher('vote', index)}">{option.name}</button>
{/each}

<script>
    import { createEventDispatcher } from 'svelte'

    export let options

    const dispatcher = createEventDispatcher()
</script>

<style>
    .button {
        margin-right: 10px;
    }
</style>