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
              v-col(cols = "4")
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
                              v-img(
                                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                  )
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
              // SEVEN: image
              v-col(cols = "4")
                  v-card(
                      class = "pa-0"
                      ) 
                      v-img(
                          cover
                          inline
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                          )
                      v-card-subtitle seven
              // EIGHT: fancy card text and background image
              v-col
                  v-card(
                      class = "pa-2"
                      image = "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      title = "test"
                      )
                      v-card-text eight
                      v-divider
                      v-card-text 8
                      v-divider( vertical )
                      v-card-text XIII
              // NINE: dialog
              v-col
                  v-card(
                      class = "pa-2"
                      title = "NINE"
                      ) 
                      v-card-actions
                          v-btn(
                              color = "purple"
                              @click = "dialog=!dialog"
                              text
                              ) nine
                      v-dialog(
                          v-if="dialog"
                          width = "500"
                          )
                          template(
                              v-slot:activator="{ props }"
                              )
                              v-btn(
                                  v-bind="props"
                                  variant="outlined, tonal"
                                  @click="isActive=true"
                                  ) open dialog
                          template(
                              v-slot:default="{ isActive }"
                              )
                              v-card( title = "Dialog")
                                  v-card-text() This is a dialog!
                                  v-card-actions()
                                      v-spacer()
                                      v-btn(
                                          text="Close Dialog"
                                          @click="isActive.value = false"
                                          )


       // TEN: snackbar and tooltip
       div( class = "mt-4" )
           // can't close it right now
           //v-btn(
           //    @click="snackbar=true"
           //    class="mx-2"
           //    ) open snackbar
           //    v-snackbar(
           //        v-model="snackbar"
           //        ) {{ text }}
           //        template(
           //            v-slot:actions
           //            )
           //            v-btn(
           //                color="pink"
           //                variant="text"
           //                @click="snackbar=false"
           //                )
           v-btn
               v-tooltip(
                   activator = "parent"
                   location="start"
                   ) tooltip
           v-tooltip( text = "click!" )
               template( v-slot:activator="{ props }" )
                   v-btn(v-bind="props") Tooltip
           p we're going to need to revisit tooltip

       div( class = "mt-2" )
           v-virtual-scroll(
               :height="200"
               :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
               )
               template(v-slot:default="{ item }") Item {{ item }}
           p and virtual scroll

       // TWELVE: skeleton loader
       div( class = "my-5")
           v-btn(
               variant="outlined"
               class = "mb-2"
               block
               color="cyan"
               @click="loading=!loading"
               ) toggle loading
           // using if, there is also a way using slot
           v-skeleton-loader(
               v-if="loading"
               type="card"
               ) 
           v-card(
               v-if="!loading"
               ) 
               v-img(
                   cover
                   inline
                   max-height="200"
                   src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                   ) 
               v-divider
               v-card-text here!
           p ^skeleton loader
           
</template>

<script>
   export default{
       data: () => ({
           reveal: false,
           dialog: false,
           loading: true,
           snackbar: false,
           snackbar_text: "Hello, I'm a snackbar"
//           isActive: false
       }),
   }
</script>
