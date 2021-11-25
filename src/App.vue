<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/l43">Lesson 43</router-link> |
    <router-link to="/l44">Lesson 44</router-link> |
    <router-link to="/l45">Lesson 45</router-link> |
    <router-link to="/todolist">To-Do List App</router-link>
  </div>
  <router-view /> -->
  <div>
    <ToDoApp />
  </div>
</template>

<script>
import ToDoApp from './components/ToDoApp.vue';

export default {
  name: 'ToDoList',
  components: {
    ToDoApp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  cursor: default;
}
h3 {
  color: hsl(153, 48%, 49%);
}
hr {
  width: 300px;
  margin: 1rem auto !important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
