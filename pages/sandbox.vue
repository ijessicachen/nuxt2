<template lang="pug">
   v-app( class = "mx-5" "mt-2" )
       div
           h2 Practice
           ul
               li yes I realized I need to actually know the language if I want to use it
               li will be a bunch of simple things to look cool and  make me feel productive
               li I don't know why it is doing that fading at the sides
       div( class = "my-2" )
          p cards & grid.
          v-row
              v-col
                  v-card(
                      class = "pa-2"
                      outlined
                      ) one
              v-col
                  v-card(
                      class = "pa-2 text-center"
                      outlined
                      title
                      ) two
              v-col
                  v-card(
                      title
                      ) three
          v-row
              v-col
                  v-card(
                      class = "pa-2 text-right"
                      disabled
                      tile
                      ) four
              v-col
                  v-card(
                      outlined
                      ) 
                      v-card-actions
                          v-btn(
                              x-small
                              color = "red"
                              @click = "reveal = true"
                              text
                              ) five
                      v-expand-transition
                          v-card(
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="height: 100%;"
                              ) 5.5 :O
                              v-card-actions
                                  v-btn(
                                      text
                                      color = "red"
                                      @click = "reveal = false"
                                      x-small
                                      ) hide
              v-col
                  v-card(
                      class = "pa-2 font-italic font-weight-light"
                      outlined
                      loading
                      ) six
          v-row
              v-col
                  v-card(
                      class = "pa-2"
                      ) 
                      v-img(
                          )
                          v-card-text seven. guess the photo will wait for another day.
              v-col
                  v-card(
                      class = "pa-2"
                      )
                      v-card-text eight
                      v-divider
                      v-card-text 8
                      //v-divider( vertical )
                      //v-card-text XIII
              v-col
                  v-card(
                      outlined
                      tile
                      )
                      v-dialog(
                          v-model="dialog"
                          )
                          template( v-slot:activator="{ on, attrs}" )
                              v-btn(
                                  outlined
                                  color = "red"
                                  ) nine
                          v-card pop-up!
                              v-card-actions
                                  v-btn(
                                      color = "primary"
                                      text
                                      @click="dialog = false"
                                      ) go back

           
</template>

<script>
   export default{
       data: () => ({
           reveal: false,
           dialog: false,
       }),
   }
</script>
