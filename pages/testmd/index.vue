<template lang="pug">
v-container
    p Test Markdown

    div(
        v-html="mdhtml('index.md')"
    )
</template>
<script>
export default{
    name: "testMarkdown",
    methods: {

        // as in md to html
        mdhtml:function (filename) {

            const content = require(`@/pages/testmd/${filename}`);
            const mdit = require("markdown-it")(); // no script so you don't have to use the funky character

            return mdit.render(content.default);
        }

    }
}
</script>
