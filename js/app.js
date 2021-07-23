import InputComponent from './ui/input.js';

const app = Vue.createApp({
  template: `Howdy ho!`,
})
.component('input', InputComponent);

const vm = app.mount('#app');
