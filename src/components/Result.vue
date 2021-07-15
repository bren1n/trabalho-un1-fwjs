<template>
    <div>
    <h1>Resultados</h1>
    <ol>
        <li v-for="option in options" :key="option.name">{{ option.name }} - {{ option.votes }} votos ({{ (option.votes / total) * 100 }}%)</li>
    </ol>
    </div>
</template>

<script>
    export default {
        props: ['options', 'total']
    }
</script>