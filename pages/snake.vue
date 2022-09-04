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
           li moves, eats fruit, can die, can replay
           li cannot win, needs to be more user friendly mid-game
           li two game difficulties!
           li gotta finish that screen size warning
       iframe(
           height = "700px" width = "100%"
           src = "https://replit.com/@egg678/realsnake?embed=true"
           )
</template>
