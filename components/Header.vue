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
           outlined
       ).mx-2
           v-icon(
               color = "deep-purple darken-3"
           ) {{ "mdi-moon-waning-crescent" }}

</template>
