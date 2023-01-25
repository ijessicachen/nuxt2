<template lang="pug">
div
    v-app-bar(
        height = "50"
        color = "blue-grey lighten-2"
        )
       v-btn(
           class = "ml-1"
           depressed
           icon
           small
           to = "/"
       )
           v-icon(
               color = "green accent-4"
               ) {{ "mdi-home" }}
       v-spacer
       v-btn(
           icon
           small
           v-bind:color = "modes.at(state)"
           outlined
           @click = "ahmyeyes(\"mode\")"
       ).mx-2
           // it would be cool to make the icon change too but idk if
           // I have that skill yet
           v-icon(
           ) {{ "mdi-moon-waning-crescent" }}

</template>
<script>

export default{ // new Vuetify({

    // variables
    data: function(){
        return{
            modes: ["deep-purple accent-4", "yellow accent-1"],
            buttons: ["mdi-moon-waning-crescent", "mdi-white-balance-sunny"],
            state: false
        };
    },

    computed:{
    },

    methods:{
        ahmyeyes: function(b) {
            if (state === false){
                state = true;
            } else{
                state = false;
            }
        }
    },

    // theme?
    /*
      oops, looks liek I actually need to use
      the "secondary", "primary", "accent", "error"
      colours to make theme work well. Do that next I guess.
    */
    //theme: { dark: state }
}//)


// bro I'll deal with theme later, I have
// code needed but I have no idea where 
// to use it
/*
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
      theme: { dark: true },
})
*/

</script>
