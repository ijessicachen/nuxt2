<template lang="pug">
// TO DO

// • eventually a sort of "powering up" animation
// • secondary buttons ("function" button)
// • exponents and roots (for the value that is shown)
//   squaring the number is all good already though!
// • brackets ;-;

v-app
    div( class = "mx-5 mt-2" )
         h2 Calculator 
         ul
             li Goal is a functioning calculator with at least basic 4 ops 
             li 4 basic ops work, adding brackets, more complicated operations, and more!
             li numbers mostly work but decimals are kind of funky.

    // CALCULATOR GRAPHICS
    v-card.my-8(
        class = "mx-auto"
        max-width = "624"
        outlined
    )
        table
            // textfield to type in 
            //blocking typing in it since I don't want to deal with that
            //yet so I'll just remove the option
            tr
              th(colspan = "5")
                v-text-field(
                    filled
                    readonly 
                    v-model = "result"
                    v-bind:label = "first"
                ) 
            // clear button
            tr
              th(colspan = "5")
                 v-btn(
                   medium
                   block 
                   color = "deep-purple darken-4"
                   outlined
                   @click = "operations(' ')"
                 ) clear
            // number rows
            tr
              td
                 v-btn(
                     large
                     fab
                     color = "green accent-4"
                     @click = "numberClick('sqr')"
                 )
                     v-icon mdi-format-superscript
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
              td
                 v-btn(
                     large
                     fab
                     color = "green accent-4"
                     @click = "numberClick('sqrt')"
                 )
                     v-icon mdi-square-root
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
              td
                 v-btn(
                     large
                     fab
                     color = "green accent-4"
                 )
                     v-icon mdi-exclamation
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
                  color = "green accent-4"
                  fab
                  @click = "numberClick('f')"
                )
                    v-icon mdi-plus-minus-variant 
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
                     fab
                     color = "blue lighten-1"
                 )
                     v-icon mdi-code-parentheses
              th(colspan = "3")
                v-btn(
                 large 
                 color = "red lighten-1"
                 block
                 @click = "operations('=')"
                ) 
                    v-icon(
                       large
                    ) mdi-equal
              td
                 // FIGURE OUT HOW YOU CAN CHANGE ELEMENTS OF A BUTTON
                 v-switch(
                     class = "ml-2"
                     color = "grey darken-4"
                     )
                 
</template>

<script>
export default {
   // variables
   data: function(){
       return{
           r1: ["red lighten-1", "red lighten-1", "red lighten-1", "red lighten-1"], // google operation thing
           b1: ["blue lighten-1", "blue lighten-1", "blue lighten-1", "blue lighten-1"],
           result: "0",
           first: null,
           hold: [], // pretty sure whole equation will end up here
           op: null, // operation
           places: 0
       };
   },

   computed: {

   },

   /**
    * TO DO
    *    • you need a clear button
    */
   methods: {
       
       //number button clicking
       numberClick: function(n) {

           // del or backspace
           if( n === "<-"){
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
           // ^2
           else if (n === "sqr"){
               this.result *= this.result;
           }
           // normal numbers
           else{
               // make sure consecutive zeros don't happen and . will turn into
               // 0.
               if( this.result === "0" || this.result === null ){
                   if ( n === "0" || n === "<-" || n === "f"){

                   }
                   else if ( n === "." ){
                      this.result = "0.";
                   }
                   else{
                      this.result = n;
                   }
               } else{
                   this.result = this.result + "" + n;
               }
           }

       },


       //operations 
       // redoing them so the operations can stack into an array
       // WAIT YOU CAN PROBABLY JUST MAKE RECURSIVE FOR BRACKETS SO SCREW THE ARRAY (for now?)
       operations: function(m) {
           this.r1 = ["red lighten-1", "red lighten-1", "red lighten-1", "red lighten-1"]

           if (m === " "){
               this.first = null;
               this.result = null;
           }
           else if (m === "="){
               //this.result = this.hold.at(0); // pretty sure this is just testing if it works
               //console.log(this.hold);
               switch (this.op){
                    case 'x':
                        this.result = parseInt(this.first) * parseInt(this.result);
                        break;
                    case '-':
                        this.result = parseInt(this.first) - parseInt(this.result);
                        break;
                    case '+':
                        this.result = parseInt(this.first) + parseInt(this.result);
                        break;
                    case '/':
                        this.result = parseInt(this.first) / parseInt(this.result);
                        break;
                    default:
                        this.result = 0;
                        // or it's something I don't want to deal with.
                        break;
                }
                this.first = null;
                this.op = null;
                this.hold = [];
           }else{
               //this.first = this.hold.at(0).substring(0, this.hold.at(0).length-1); //you will have to change this for brackets
               if (this.first != null && this.result != null){
                   switch (this.op){
                        case 'x':
                           this.first = parseInt(this.first) * parseInt(this.result);
                           break;
                        case '-':
                           this.first = parseInt(this.first) - parseInt(this.result);
                           break;
                        case '+':
                           this.first = parseInt(this.first) + parseInt(this.result);
                           break;
                        case '/':
                           this.first = parseInt(this.first) / parseInt(this.result);
                           break;
                        default:
                           this.result = "not there yet";
                           break;
                   }
               }
               else{
                   this.first = this.result //for now until I can figure the hold one out
               }
               this.result = null;
           }

           // this comes after because I calulate the previous part first? 
           //okay there's probably a smarter way to do this.
           if ( m === "x"){
               this.op = "x";
               /*
               if (this.first != null && this.result != null){
                   this.first *= this.result
               }
               */
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

       }
   }
}
</script>
