<template lang="pug">

    //how to change background colour: style:"background= "
    //v-app(
    //    )
    v-container
         v-dialog(
             v-model="dialog"
             fullscreen
             transition="dialog-bottom-transition"
         ) 
             template(
                 v-slot:activator = "{ on, attrs }"
             )
                 v-btn(
                     small
                     icon
                     outlined
                     v-bind="attrs"
                     v-on="on"
                 )
             v-card(
             )
                 v-btn(
                     small
                     icon
                     outlined
                     @click = "dialog = false"
                     )
                 // plan to make themes now, one for each letter of my first name to switch there, and then my last name will be for… we're getting there
                 // hope to make it refresh back to this page, not the first page
                 v-btn(
                     max-height = "200px"
                 )
                     // src="/assets/testhead.png"
                     // see if @click for images is ia thing
                     v-img(
                         :src="require('@/assets/testhead.png')"
                         width = "10px"
                     )

            
</template>

<script>
   export default{
       data(){
           return{
               dialog: false,
           }
       },
   }
</script>

<style>
.testcol{
    background: green;
}
</style>
