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
    h2 Calculator 
    ul
        li Incomplete, but, numbers, backspace, and +/- work
        li Goal is a functioning calculator with at least basic 4 ops 
    // calculator graphics
    v-card.my-8(
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
                    v-bind:label = "first"
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
                 v-bind:color = "r1.at(0)"
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
                 v-bind:color = "r1.at(1)"
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
                 v-bind:color = "r1.at(2)"
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
                 v-bind:color = "r1.at(3)"
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
                 color = "red lighten-1"
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
           r1: ["red lighten-1", "red lighten-1", "red lighten-1", "red lighten-1"], // google operation thing
           result: "0",
           first: "result",
           hold: [], // pretty sure whole equation will end up here
           op: null, // operation
           places: 0
       };
   },

   computed: {

   },

   /**
    * TO DO
    *    • find a way to severely limit what you can type in the
    *    text box or just not allow typing at all.
    *    • you need a clear button
    */
   methods: {
       
       //number button clicking
       numberClick: function(n) {

           // wait what is this???
           if( this.first == this.result){
               this.result == null;
           }

           // make sure consecutive zeros don't happen and . will turn into
           // 0.
           if( this.result === "0" || this.result === null ){
               if ( n === "0" || n === "<-" || n === "f"){

               }
               else if ( n === "." ){
                  this.result = "0.";
               }
               else{
                  this.result = "" + n;
               }
           }
           // del or backspace
           else if( n === "<-"){
               if (this.places === 0){
                  this.result = Math.trunc(this.result / 10); 
               }
               else { //this should work with brackets but it's not like I've had the chance to try it yet
                  this.result = Math.trunc(this.result * 10^this.places * 10 / 10)// / (10 ^ (this.places - 1));
               }
           }
           // +/-
           else if(n === "f"){
               this.result *= -1;
           }
           /*
              I think right now I'm trying to create a longass string to
              account for brackets but I think I should be able to calculate
              it until there is a bracket
           */
           // the structure is supposed to account for brackets rn but there
           // aren't actually any brackets implemented
           // DO NOT USE BRACKETS YET WHEN TESTING
           else{
               this.result = this.result + "" +  n;
               this.hold.push(this.op + n); // add the number to the end of the string
           }

       },
       //operations 
       // redoing them so the operations can stack into an array
       operations: function(m) {
           this.r1 = ["red lighten-1", "red lighten-1", "red lighten-1", "red lighten-1"]

           // do something here to calculate the previous 
           // components of hold so like ideally there should be
           // max two elements in hold
           /*
           let check = hold;
           while (true){
               if (this.check.length === 2 && (this.check.at(1).isArray() && this.check.at(1).at(length-1).charAt(length-1) != ')')){
                   this.check = this.check.at(1);
               } else if (this.check.length === 2){
                   var one = this.check.at(0).substring(0, this.check.at(0).length-2);
                   var op = this.check.at(0).charAt(this.check.at(0).length-1);
                   var o = this.op.charCodeAt(0);
                   switch(o){
                       case 43:
                           break;
                       case 45:
                           break;
                       case 47:
                           break;
                       default: //multiplication
                   };
               }
           }
           */

           if ( m === "x"){
               this.op = "x";
               // this.hold.push(this.result + "x");
               this.r1.splice(0, 1, "pink lighten-2");
           }
           else if( m === "-"){
               this.op = "-";
               this.r1.splice(1, 1, "pink lighten-2");
           }
           else if ( m === "+"){
               this.op = "+";
               this.r1.splice(2, 1, "pink lighten-2");
           }
           else if ( m === "/"){
               this.op = "/";
               this.r1.splice(3, 1, "pink lighten-2");
           }
           
           if (this.op === "="){
               //this.result = this.hold.at(0); // pretty sure this is just testing if it works
               //console.log(this.hold);
               this.result = null;
               this.first = this.result;
              this.hold = [];
           }else{
               //this.first = this.hold.at(0).substring(0, this.hold.at(0).length-1); //you will have to change this for brackets
               this.first = this.result //for now until I can figure the hold one out
               this.result = null;
           }
       }
   }
}
</script>
