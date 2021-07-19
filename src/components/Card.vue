<template>
    <div v-if="state === 'open'">
        <h1>{{ title }}</h1>
        <Booth :options="options" @vote="$emit('vote', $event)"/>
    </div>
    <Result v-else :options="options"/>
</template>

<script>
import Booth from './Booth.vue'
import Result from './Result.vue'

export default {
    components: {Booth, Result},
    props: ['state', 'title', 'options'],
}
</script>