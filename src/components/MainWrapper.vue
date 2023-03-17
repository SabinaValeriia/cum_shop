<template>
    <div class="main-wrapper">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default{
name: 'MainWrapper',
components: {},
props:{},
data() {
    return {
        title: "Main wrapper"
    }
},
computed: {

},
methods: {

},
watch: {}

}
</script>

<style>
.main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>