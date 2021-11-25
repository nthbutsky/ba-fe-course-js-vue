<template>
  <div :title="task">
    <h3>{{ title }}</h3>
    <input type="number" v-model.lazy="number" @blur="onFocus()" id="input" />
    <button type="button" @click="increment()">+</button>
    <button type="button" @click="decrement()">-</button>
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task2',
  props: {
    title: String,
  },
  data() {
    return {
      number: '',
      task: 'Создайте компонент, который будет выполнять следующее поведение: в шаблоне – должны быть две кнопки с функциями инкремента и декремента, параграф и поле ввода. Пользователь в текстовое поле вводит число, после потери фокуса данного поля это число моментально появляется ниже в значении параграфа. Значение поля очищается. При нажатии на данные кнопки число, находящееся в параграфе, должно добавлять единицу или вычитать. ',
    };
  },
  methods: {
    increment() {
      if (this.number >= 0) {
        this.number++;
      }
    },
    decrement() {
      if (this.number) {
        this.number--;
      }
    },
    onFocus() {
      document.querySelector('#input').value = '';
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
  margin: 0 5px;
  background-color: #2c3e50;
  border: none;
  height: 30px;
  border-radius: 15px;
  font-weight: bold;
  padding: 0 42px;
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
  color: white;
  text-decoration: none;

  &:hover {
    color: #42b983;
  }
}
ol {
  width: 100px;
  text-align: left;
  margin: 0 auto;
  border: 2 px solid #42b983;
  padding: 0 20px;
}
li {
  margin: 10px;
}
.isVisible {
  display: none;
}
</style>
