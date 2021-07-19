<template>
    <div v-if="state === 'open'">
        <h1>{{ title }}</h1>
        <Booth :options="options" @vote="vote"/>
    </div>
    <Result v-else :options="options"/>
</template>

<script>
import Booth from './Booth.vue'
import Result from './Result.vue'

const options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]

export default {
    components: {Booth, Result},
    data: () => ({
        state: 'open',
        title: 'Isso é um projeto Vue?'
    }),
    methods: {
        vote(index) {
            this.state = 'closed'
            this.options[index].votes++
        }
    },
    computed: {
        options() {
            return options
        }
    }
}
</script>