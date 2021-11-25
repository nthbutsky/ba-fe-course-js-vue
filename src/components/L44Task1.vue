<template>
  <div :title="task">
    <h3>{{ title }}</h3>
    <input v-model.lazy="colorInput" />
    <button @click="colorInput, generator()">Submit</button>
    <p id="text-color">{{ colorInput }}</p>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'Task1',
  props: {
    title: String,
  },
  data() {
    return {
      colorInput: '',
      task: 'Задание: Реализуйте форму, в которой пользователь может в текстовое поле вводить цвет – и при нажатии на кнопку подтверждения - отображается – на странице – данный текст данным цветом. Список цветов создайте с помощью массива.',
    };
  },
  methods: {
    generator() {
      document.querySelector('#text-color').style.color = this.colorInput;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  display: block;
  margin: 10px auto;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #2c3e50;
  padding-left: 10px;

  &:focus {
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0 0 5px #2c3e50);
    outline: none;
    padding-left: 10px;
  }
}
button {
  background-color: #2c3e50;
  border: none;
  height: 30px;
  border-radius: 15px;
  font-weight: bold;
  padding: 0 10px;
  color: white;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    filter: drop-shadow(0 0 5px #2c3e50);
  }
}
p {
  font-size: 2rem;
}
a {
  color: #42b983;
}
</style>
