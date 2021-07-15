<div class="card">
    {#if state === 'open'}
        <Booth {options} {title} on:vote="{vote}"/>
    {:else}
        <Result {options} {total}/>
    {/if}

</div>

<script>
    import Booth from './Booth.svelte'
    import Result from './Result.svelte'

    const options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]

    let state = 'open'
    let total = options.reduce((x, y) => x + y.votes, 0);
    let title = 'Esse é um projeto Svelte?'

    function vote(index){
        options[index.detail].votes++
        total++
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