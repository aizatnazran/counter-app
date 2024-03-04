<template>
  <div id="app">
    <h1>Counter</h1>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

button {
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
}

div {
  font-size: 2em;
  margin: 20px;
}
</style>
