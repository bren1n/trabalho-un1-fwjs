<h1>Resultado</h1>
<ol>
    {#each options as option (option.name)}
        <li>{option.name} - {option.votes} votos ({(option.votes / total)*100}%)</li>
    {/each}
</ol>

<script>
    export let options
    export let total
</script>