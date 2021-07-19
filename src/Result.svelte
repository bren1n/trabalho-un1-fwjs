<h1>Resultado</h1>
<ol>
    {#each options as option (option.name)}
        <li>{option.name} - {option.votes} votos ({((option.votes / total())*100).toFixed(1)}%)</li>
    {/each}
</ol>

<script>
    export let options
    
    function total() {
        return options.reduce((x, y) => x + y.votes, 0);
    }
</script>