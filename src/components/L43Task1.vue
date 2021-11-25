<template>
  <div :title="task">
    <h3>{{ title }}</h3>
    <input v-model.lazy="message" />
    <button @click="message, generator()">Submit</button>
    <p>{{ message }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'L43Task1',
  props: {
    title: String,
  },
  data() {
    return {
      message: '',
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      task: 'Задание: Создайте страницу с текстовым полем ввода. При нажатии на кнопку подтверждения, данные из поля должны отображаться в документе, поле ввода – очищаться, а фоновый цвет меняться в зависимости от введённого значения.',
    };
  },
  mounted() {
    document.body.style.background = 'hsl(0, 0%, 255%)';
  },
  methods: {
    generator: function () {
      this.color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
      document.body.style.background = this.color;
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
