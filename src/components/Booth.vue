<template>
    <div>
        <button class="button" v-for="(option, index) in options" :key="option.name" @click="$emit('vote', index)">{{ option.name }}</button>
    </div>
</template>

<script>
export default {
    props: ['options']
}
</script>

<style>
    .button {
        margin-right: 10px;
    }
</style>