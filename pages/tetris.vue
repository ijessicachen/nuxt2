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
       h2 Tetris
       ul
           li made with python curses, resembling the iconic game
       iframe(
           height = "700px" width="100%"
           src = "https://replit.com/@egg678/TETRIS?embed=true"
           )
</template>
