<template lang="pug">
   v-app
        h1 HELLO 
        ul
            li I'm Jessica 
            li Here are some things I'm experimenting with
            li None are really "complete", but those tagged with (IN PROGRESS) do not yet function close enough to my actual goal for them.
        
        //buttons to other pages
        //  • now they're all in rows to make the height of each section equal
        v-row( 
            no-gutters
            class = "mt-6"
            )
            v-btn.white--text(
                  height = "100%"
                  block
                  color = "indigo accent-2"
                  to = "/calc"
            ) calculator (in progress) 
        v-row( no-gutters )
            v-btn.white--text(
                  height = "100%"
                  block
                  color = "blue accent-2"
                  to = "/tetris"
            ) tetris (in progress)
        v-row( no-gutters )
            v-btn.white--text(
                  height = "100%"
                  color = "blue"
                  block
                  to = "/mines"
            ) minesweeper
        v-row( no-gutters )
            v-btn.white--text(
                 height = "100%"
                 block
                 color = "cyan"
                 to = "/snake"
            ) snake
        v-row( no-gutters )
            v-col()
               v-btn.white--text(
                   height = "100%"
                   block
                   color = "teal accent-4"
                   href = "/legacy/IT2_Stem_Club/Smoke_Detector.html"
               ) fire alarm website
            v-col()
               v-btn.white--text(
                   height = "100%"
                   block
                   color = "teal accent-4"
                   to = "/falarm2"
               ) fire alarm website improved (in progress)
        v-row( no-gutters )
            v-btn.white--text(
                height = "100%"
                block
                color = "black"
                to = "/test"
            ) new test home page (in progress)
</template>
<script>
export default{
//    layout: "default"
}
</script>
