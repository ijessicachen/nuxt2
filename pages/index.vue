<template lang="pug">
    v-app
        h1  HELLO 
        h3  ____________________ 
        ul
            li I'm Jessica 
            li Here are my notable projects:
        
        //buttons to other pages
        v-btn(
            block
          color = "indigo accent-1"
        ) calculator (in progress) 
        v-btn(
          color = "blue"
          block
        ) minesweeper
        v-btn(
          block
          color = "cyan"
        ) snake (in progress)
        v-btn(
          block
          color = "teal accent-3"
        ) fire alarm website
</template>
