<template lang="pug">
   v-app
        h1 HELLO 
        ul
            li I'm Jessica 
            li Here are my notable projects:
        
        //buttons to other pages
        v-btn.mt-8.white--text(
          block
          color = "indigo accent-2"
          to = "/calc"
        ) calculator (in progress) 
        v-btn.white--text(
          block
          color = "blue accent-2"
          to = "/tetris"
        ) tetris (in progress)
        v-btn.white--text(
          color = "blue"
          block
          to = "/mines"
        ) minesweeper
        v-btn.white--text(
          block
          color = "cyan"
          to = "/snake"
        ) snake (in progress)
        v-btn.white--text(
          block
          color = "teal accent-4"
          href = "/legacy/IT2_Stem_Club/Smoke_Detector.html"
        ) fire alarm website
        v-btn.white--text(
            block
            color = "black"
            to = "/test"
        ) new test home page
</template>
<script>
export default{
//    layout: "default"
}
</script>
