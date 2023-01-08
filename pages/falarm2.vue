<template lang="pug">

v-app
   h2 website to be here, eventually
      ul
          li I want some cool effects
          li Also for it just to be smoother than the old one


   // sidebar
   v-navigation-drawer(
       permanent
       expand-on-hover
       src="https://dalebailey.com/wp-content/uploads/2012/02/black_swirls_background.jpg"
       )
       // these icons could be improved upon and also
       // text should be bigger
       v-list(
           nav
           dense)
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-card-text-outline" }}
               v-list-item-title() Description
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-cart" }}
               v-list-item-title() Materials 
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-image-edit-outline" }}
               v-list-item-title() Diagram
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-code-tags" }}
               v-list-item-title() Code
           v-list-item.white--text()
               v-list-item-icon()
                   v-icon(
                       color = "purple accent-1"
                    ) {{ "mdi-presentation-play" }}
               v-list-item-title() Demonstration

    
</template>
