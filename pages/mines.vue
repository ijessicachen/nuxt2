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
       h2 Minesweeper
       ul
           li made with python curses, the complete game
       iframe(
           height = "700px" width="100%"
           src = "https://replit.com/@egg678/LearnCodingInPython?lite=true&outputonly=1"
           )
</template>
