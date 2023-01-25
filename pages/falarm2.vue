<template lang="pug">

v-app
   div( class = "mx-5 mt-2" )
       h2 website to be here, eventually
       p
          ul
              li I want some cool effects
              li Also for it just to be smoother than the old one


   // sidebar
   v-navigation-drawer(
       class = "mt-6"
       permanent
       expand-on-hover
       color = "black"
       )
       // these icons could be improved upon and also
       // text should be bigger
       // lmao this doesn't even lead anywhere yet
       v-list(
           nav
           dense)
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-card-text-outline" }}
               v-list-item-title() Description
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-cart" }}
               v-list-item-title() Materials 
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-image-edit-outline" }}
               v-list-item-title() Diagram
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-code-tags" }}
               v-list-item-title() Code
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-presentation-play" }}
               v-list-item-title() Demonstration

   // content
   v-main
       h2 Arduino Smoke Detector

    
</template>
<script>
   export default{
       //
   }
</script>
