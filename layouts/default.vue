<template lang="pug">

v-app
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
