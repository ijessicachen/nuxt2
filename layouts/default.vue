<template lang="pug">

v-app.testcol
    Header
    Nuxt/
    Footer

</template>

<script>
export default{

    components:{
        Header: () => import('@/components/Header'),
        Footer: () => import('@/components/Footer')
    }

}
</script>

<style>
.testcol{
    background-color: blue;
}
</style>
