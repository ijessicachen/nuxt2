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

        v-dialog(
            v-model="dialog"
            fullscreen
            transition="dialog-bottom-transition"
        ) 
            template(
                v-slot:activator = "{ on, attrs }"
            )
                v-btn(
                    small
                    v-bind="attrs"
                    v-on="on"
                ) Welcome! Click to begin
            v-card(
            )
                v-btn(
                    icon
                    @click = "dialog = false"
                )
                    v-icon(
                        color = "primary"
                    ) {{ "mdi-close" }}
                v-card(
                    max-width="500"
                )
                    // src="/assets/testhead.png"
                    v-img(
                        :src="require('@/assets/testhead.png')"
                        height="200px"
                    )
            
</template>

<script>
   export default{
       data(){
           return{
               dialog: false,
           }
       },
   }
</script>
