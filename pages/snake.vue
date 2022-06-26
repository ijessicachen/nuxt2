<template lang="pug">
   v-app
       v-btn(
           depressed
           icon
           small
           to = "/"
       ) 
           v-icon(
               color = "green accent-4"
               ) {{ "mdi-home" }}
       h2 Snake
       ul
           li Incomplete, but the snake moves
           li goal is a completed snake game
       iframe(
           height = "700px" width = "100%"
           src = "https://replit.com/@egg678/snake?lite=true&outputonly=1#main.py"
           )
</template>
