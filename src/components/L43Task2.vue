<template>
  <div :title="task">
    <h3>{{ title }}</h3>
    <button @click="output()">Submit</button>
    <div id="output"></div>
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
      task: 'Задание: Создайте функцию, которая будет на нажатие кнопки мыши предлагать пользователю два варианта: при нажатии на первый – выполняется функция, которая показывает, какая клавиша мыши была нажата; при нажатии на другой – выводится текущее время.',
    };
  },
  methods: {
    output: function () {
      const output = document.querySelector('#output');
      output.innerText = 'Now press any key on the mouse';
      document.addEventListener('mousedown', e => {
        const click = e.button;
        let mouseBtn = '';
        if (click === 0) {
          mouseBtn = 'You pressed left mouse button';
        } else if (click === 2) {
          mouseBtn = 'You pressed right mouse button';
        } else {
          mouseBtn = 'You pressed middle mouse button';
        }
        const option = confirm(
          'Press OK to see which mouse button has been pressed or press Cancel to see current time',
        );
        if (option === true) {
          output.innerText = '';
          output.append(mouseBtn);
        } else {
          output.innerText = '';
          const time = new Date().getHours() + ':' + new Date().getMinutes();
          output.append(time);
        }
      });
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
  border: none;

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
  margin-bottom: 30px;
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
#output {
  color: hsl(153, 48%, 49%);
  font-size: 1.17rem;
}
</style>
