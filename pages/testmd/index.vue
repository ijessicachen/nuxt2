<template lang="pug">
v-container
    p Test Markdown

    div(
        v-html="mdhtml('index.md')"
    )
</template>
<script>
export default{
    name: "index",
    methods: {

        // as in md to html
        mdhtml:function (filename) {

            console.log( this );
            console.log( this.$route.query );

            let content = null;
            if ( !(this.$route.query.hasOwnProperty('name')) ){
                content = require(`@/pages/testmd/index.md`);
            } else{
                content = require(`@/pages/testmd/${this.$route.query.name}.md`);
            }
            const mdit = require("markdown-it")(); // no script so you don't have to use the funky character

            return mdit.render(content.default);
        }

    }
}
</script>
<style>
code{
    display: block;
}
</style>
