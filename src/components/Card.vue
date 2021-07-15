<template>
    <div>
        <Booth v-if="state === 'open'" :options="options" :title="title" @vote="vote"/>
        <Result v-else :options="options" :total="total"/>
    </div>
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
            console.log(this.total)
        }
    },
    computed: {
        options() {
            return options
        },
        total() {
            return options.reduce((x, y) => x + y.votes, 0)
        }
    }
}
</script>