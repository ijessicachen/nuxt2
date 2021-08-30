<template lang="pug">

    v-app
        v-card(
            class = "mx-auto"
            max-width = "500"
            outlined
        )
            table
                tr
                  th(colspan = "4")
                    v-text-field(
                        filled
                        clearable
                    )
                tr
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-7-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-8-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    )
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-9-circle 
                  td 
                    v-btn(
                     large
                     fab
                     color = "red lighten-1"
                    ) 
                        v-icon mdi-close
                tr
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-4-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-5-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-6-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "red lighten-1"
                    ) 
                        v-icon mdi-minus
                tr
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-1-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-2-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-3-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "red lighten-1"
                    ) 
                        v-icon mdi-plus
                tr
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    ) 
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-numeric-0-circle
                  td 
                    v-btn(
                     large
                     fab
                     color = "deep-purple darken-4"
                    )
                        v-icon(
                            color = "grey lighten-5"
                        ) mdi-circle-small
                  td 
                    v-btn(
                      large
                      fab
                      color = "deep-purple darken-4"
                      outlined
                    )
                        v-icon mdi-arrow-left-bold
                  td 
                    v-btn(
                     large
                     fab
                     color = "red lighten-1"
                    ) 
                        v-icon mdi-slash-forward
                tr
                  //td
                  //  v-btn(
                  //    large
                  //    color = "green accent-4"
                  //    fab
                  //  )
                  //      v-icon mdi-plus-minus-variant 
                  //td
                  //  v-btn(
                  //    large
                  //    fab
                  //    color = "red lighten-1"
                  //  )
                  //      v-icon mdi-exponent
                  //td
                  th(colspan = "4")
                    v-btn(
                     large 
                     color = "red lighten-1"
                     block
                    ) 
                        v-icon(
                           large
                        ) mdi-equal
                    
          
</template>
