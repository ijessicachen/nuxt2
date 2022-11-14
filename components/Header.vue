<template lang="pug">
div
    v-app-bar(
        height = "50"
        color = "indigo lighten-4"
        )
       v-btn(
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

export default {
    // variables
    data: function(){
        return{
            modes: ["deep-purple darken-3", "yellow accent-1"],
            buttons: ["mdi-moon-waning-crescent", "mdi-white-balance-sunny"],
            state: 0
        };
    },

    computed:{
    },

    methods:{
        ahmyeyes: function(b) {
            if (state === 0){
                state = 1;
            } else{
                state = 0;
            }
        }
    }
}

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
