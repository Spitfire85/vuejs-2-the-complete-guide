Can access anything within the vue instance with just the property name.

This refers to everything within the Vue instance

Can only use {{}} withing tags <p>{{HERE}}</p> not as a property of tags <p class={{ NOT HERE }}> NO </p>

Vue Directive: Instructions for Vue.
Directive list: https://012.vuejs.org/guide/directives.html
https://012.vuejs.org/api/directives.html#Literal_Directives

By default HTML is escaped, so HTML comes in via plain text, you need to use the v-html if you want to have mark up.
