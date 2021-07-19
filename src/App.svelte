<script>
	import Card from './Card.svelte'

    let state = 'open'
    let title = 'Esse é um projeto Svelte?'
	let options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
</script>

<main>
	<Card {title} {options} {state}/>
</main>