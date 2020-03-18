https://vuejs.org/v2/guide/comparison.html
https://css-tricks.com/intro-to-vue-1-rendering-directives-events/
https://vuejs.org/images/lifecycle.png

Can access anything within the vue instance with just the property name.

This refers to everything within the Vue instance

Can only use {{}} within tags <p>{{HERE}}</p> not as a property of tags <p class={{ NOT HERE }}> NO </p>

Vue Directive: Instructions for Vue.
Directive list: https://012.vuejs.org/guide/directives.html
https://012.vuejs.org/api/directives.html#Literal_Directives

By default HTML is escaped, so HTML comes in via plain text, you need to use the v-html if you want to have mark up. <p :html="item.example">HERE</p>

Watch object can work on any property.

v-if will remove/show element from the DOM, v-show will use display none.

Would list items within a list
<li v-for="item in ingredients">{{ item }}</li>

Would like items in a list with their index value (item and i can be named anything)
<li v-for="(item, i) in ingredients">{{ item }}({{i}})</li>

Vue Application
El,
Data,
Methods
Computed
Watch

Computed properties:
Unlike methods, they don't accept any arguments, but they do have access to existing state. They're built for performance and track/cache their own dependencies so they're great for creating derived data from your state.

Methods:
Unlike computed properties, methods can take arguments, however, the method will not track its dependencies or cache any of the data passed to it.

Watchers:
These are particularly for reacting to a change in state that Vue itself won't do automatically (like update the DOM). I try and use watchers very sparingly, but they do have their uses. One instance I sometimes find myself needing is to reapply a jQuery plugin to a set of DOM els whenever data changes. That's just one example.

Further reading that may help clarify: https://vuejs.org/v2/guide/computed.html#ad

Vue Instances (you can have multiple instances)

Middle-man between DOM and business logic.

You can access a seperate Vue instances from another.

You cannot add to a Vue object from outside a Vue object, as it needs to be there on creation of the Vue object to use the Watch/Getter/Setter functionality.

ref="yourStringName"

VueJS Instance Lifecycle
https://vuejs.org/images/lifecycle.png

Putting data in a function that returns the data because we'll need to when we start using components and want them to each hold state of their own.

Methods aren't the only way to create a custom function. You can also use watch. The main difference is that methods are good for small, synchronous calculations, while watch is helpful with more tasking or asynchronous or expensive operations in response to changing data. I tend to use watch most often with animations.

What is difference between 'data:' and 'data()' in Vue.js?
https://stackoverflow.com/questions/48176345/what-is-difference-between-data-and-data-in-vue-js

Vue life cycle
https://jsfiddle.net/smax/9a2k6cja/2/
https://jsfiddle.net/smax/jcgw7ak8/
https://vuejs.org/v2/guide/instance.html
