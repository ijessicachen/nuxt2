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
                    v-model = "result"
                    label = "result"
                ) 
            tr
              td( 
                v-for = "n in [7, 8, 9]"
                :key = "n"
              ) 
                 v-btn(
                    large
                    fab
                    color = "deep-purple darken-4"
                    @click = "numberClick(n)"
                 ) 
                     v-icon(
                         color = "grey lighten-5"
                     ) {{ "mdi-numeric-" + n + "-circle" }}
              td 
                v-btn(
                 large
                 fab
                 color = "red lighten-1"
                 @click = "operations('x')"
                ) 
                    v-icon mdi-close
            tr
              td(
                  v-for = "n in [4, 5, 6]"
                  :key = "n"
              )
                v-btn(
                 large
                 fab
                 color = "deep-purple darken-4"
                 @click = "numberClick(n)"
                ) 
                    v-icon(
                        color = "grey lighten-5"
                    ) {{ "mdi-numeric-" + n + "-circle" }}
              td 
                v-btn(
                 large
                 fab
                 color = "red lighten-1"
                 @click = "operations('-')"
                ) 
                    v-icon mdi-minus
            tr
              td(
                  v-for = "n in [1, 2, 3]"
                  :key = "n"
              )
                v-btn(
                 large
                 fab
                 color = "deep-purple darken-4"
                 @click = "numberClick(n)"
                ) 
                    v-icon(
                        color = "grey lighten-5"
                    ) {{ "mdi-numeric-" + n + "-circle" }}
              td 
                v-btn(
                 large
                 fab
                 color = "red lighten-1"
                 @click = "operations('+')"
                ) 
                    v-icon mdi-plus
            tr
              td 
                v-btn(
                 large
                 fab
                 color = "deep-purple darken-4"
                 @click = "numberClick(0)"
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
                  @click = "numberClick('<-')"
                )
                    v-icon mdi-arrow-left-bold
              td 
                v-btn(
                 large
                 fab
                 color = "red lighten-1"
                 @click = "operations('/')"
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
                 @click = "operations('=')"
                ) 
                    v-icon(
                       large
                    ) mdi-equal
                    
          
</template>
<script>
export default {
   data: function(){
       return{
           result: "0",
           first: null,
           second: null,
           op: null
       };
   },

   computed: {

   },

   methods: {
       
       //number button clicking
       numberClick: function(n) {

           if( this.result === "0" || this.result === null ){
               if ( n === "0" || n === "<-" ){
                   
               }
               else{
                  this.result = "" + n;
               }
           }
           //else if( n === "<-"){
               //this.result = this.result
           else{
              this.result = this.result + "" +  n;
           }

       },
       //operations 
       operations: function(m) {

           if (m === "="){
               if (this.op === "x"){
                  this.result = this.first * parseInt(this.result);
               }
               if (this.op === "-"){
                  this.result = this.first - parseInt(this.result);
               }
               if (this.op === "+"){
                  this.result = this.first + parseInt(this.result);
               }
               if (this.op === "/"){
                  this.result = this.first / parseInt(this.result);
               }
           }
           else{
               this.first = parseInt(this.result);
               this.result = null;
               this.op = m;
           }

       },

  }
}
</script>
