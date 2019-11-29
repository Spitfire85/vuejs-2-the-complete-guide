import Vue from 'vue';

const vue1 = {
  init() {
    console.log('vue1');
    new Vue({
      el: '#app',
      data: {
        title: 'Hello World!'
      },
      methods: {
        changeTitle: function(event) {
          this.title = event.target.value;
        }
      }
    });
  }
};

export default vue1;
