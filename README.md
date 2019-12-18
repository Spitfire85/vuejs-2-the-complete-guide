Can access anything within the vue instance with just the property name.

This refers to everything within the Vue instance

Can only use {{}} withing tags <p>{{HERE}}</p> not as a property of tags <p class={{ NOT HERE }}> NO </p>

Vue Directive: Instructions for Vue.
Directive list: https://012.vuejs.org/guide/directives.html
https://012.vuejs.org/api/directives.html#Literal_Directives

By default HTML is escaped, so HTML comes in via plain text, you need to use the v-html if you want to have mark up.

Watch object can work on any property.

v-if will remove/show element from the DOM, v-show will use display none.

Would list items within a list
<li v-for="item in ingredients">{{ item }}</li>

Would like items in a list with their index value (item and i can be named anything)
<li v-for="(item, i) in ingredients">{{ item }}({{i}})</li>
