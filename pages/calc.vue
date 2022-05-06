<template lang="pug">

v-app
    // calculator graphics
    v-card(
        class = "mx-auto"
        max-width = "500"
        outlined
    )
        table
            // textfield to type in 
            tr
              th(colspan = "4")
                v-text-field(
                    filled
                    clearable
                    v-model = "result"
                    label = "result"
                ) 
            // number rows
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
                 @click = "numberClick('.')"
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
            // last row (+- and =)
            tr
              td
                v-btn(
                  large
                  color = "green accent-4"
                  fab
                  @click = "numberClick('f')"
                )
                    v-icon mdi-plus-minus-variant 
              
              th(colspan = "4")
                v-btn(
                 large 
                 v-bind:color = "r1"
                 block
                 @click = "operations('=')"
                ) 
                    v-icon(
                       large
                    ) mdi-equal
            //maybe make a new number pad for further operations
            //td
              //  v-btn(
              //    large
              //    fab
              //    color = "red lighten-1"
              //  )
              //      v-icon mdi-exponent
              //td

                    
          
</template>

<script>
export default {
   // variables
   data: function(){
       return{
           r1: "blue",//"red lighten-1",
           result: "0",
           hold: [],
           op: null,
           places: 0
       };
   },

   computed: {

   },

   /**
    * TO DO
    *    find a way to severely limit what you can type in the
    *    text box or just not allow typing at all.
    */
   methods: {
       
       //number button clicking
       numberClick: function(n) {

           if( this.first == this.result){
               this.result == null;
           }

           if( this.result === "0" || this.result === null ){
               if ( n === "0" || n === "<-" ){
                   
               }
               else if ( n === "." ){
                  this.result = "0.";
               }
               else{
                  this.result = "" + n;
               }
           }
           else if( n === "<-"){
               if (this.places === 0){
                  this.result = Math.trunc(this.result / 10); 
               }
               else {
                  this.result = Math.trunc(this.result * 10^this.places * 10 / 10)// / (10 ^ (this.places - 1));
               }
           }
           else if(n === "f"){
               this.result *= -1;
           }
           else{
              this.result = this.result + "" +  n;
           }

       },
       //operations 
       // redoing them so the operations can stack into an array
       operations: function(m) {

           if ( m === "x"){
               this.hold.push(this.result + "x");
           }
           else if( m === "-"){
               this.hold.push(this.result + "-");
           }
           else if ( m === "+"){
               this.hold.push(this.result + "+");
           }
           else if ( m === "/"){
               this.hold.push(this.result + "/");
           }
           this.result = null;

           if (this.op === "="){
              this.result = this.first;
              console.log(this.hold);
              this.hold = [];
           }

           //else{
           //    this.first = parseInt(this.result);
           //    this.result = null;
           //    this.op = m;
           //}

       },

  }
}
</script>
