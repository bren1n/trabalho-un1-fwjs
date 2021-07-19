<div class="card">
    {#if state === 'open'}
        <h1>{title}</h1>
        <Booth {options} on:vote="{vote}"/>
    {:else}
        <Result {options}/>
    {/if}

</div>

<script>
    import Booth from './Booth.svelte'
    import Result from './Result.svelte'

    // const options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]

    export let state
    export let title
    export let options

    function vote(index){
        options[index.detail].votes++
        state = 'closed'
    }
</script>

<style>
    .card {
        background-color: azure;
        padding: 15px;
        border-radius: 10px;
        margin: 15px;
    }
</style>