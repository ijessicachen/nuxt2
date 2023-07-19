<template lang="pug">
   v-app( class = "mx-5" "mt-2" )
       div
           h2 Practice
           ul
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
                      class = "pa-0"
                      ) 
                      v-img(
                          cover
                          height = "100"
                          width = "360"
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                          )
                      v-card-subtitle seven
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

       div( class = "mt-4" )
           v-btn start
               v-tooltip(
                   activator = "parent"
                   location="start"
                   ) tooltip
           v-tooltip( text = "click!" )
               template( v-slot:activator="{ props }" )
                   v-btn(v-bind="props") Tooltip
           p we're going to need to revisit tooltip

       div( class = "mt-4" )
           v-virtual-scroll(
               :height="200"
               :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
               )
               template(v-slot:default="{ item }") Item {{ item }}
           p and virtual scroll
           
</template>

<script>
   export default{
       data: () => ({
           reveal: false,
           dialog: false,
       }),
   }
</script>
