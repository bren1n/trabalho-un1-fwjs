<template>
    <div>
    <h1>Resultados</h1>
    <ol>
        <li v-for="option in options" :key="option.name">{{ option.name }} - {{ option.votes }} votos ({{ ((option.votes / total) * 100).toFixed(1) }}%)</li>
    </ol>
    </div>
</template>

<script>
    export default {
        props: ['options'],
        computed: {
            total() {
                if (this.options.length === 0)
                    return 1;

                return this.options.reduce((x, y) => x + y.votes, 0);
            }
        }
    }
</script>