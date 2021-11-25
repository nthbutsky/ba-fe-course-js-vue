<template>
  <div :title="task">
    <h3>{{ title }}</h3>
    <button @click="isVisible = !isVisible">Submit</button>
    <ol :class="{ isVisible }">
      <li v-for="article in articles" :key="article.name">
        <a :href="article.link" :title="article.hint">{{ article.name }}</a>
      </li>
    </ol>
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
      articles: [
        {
          name: 'Facebook',
          hint: 'Wiki article re Facebook',
          link: 'https://en.wikipedia.org/wiki/Facebook',
        },
        {
          name: 'Amazon',
          hint: 'Wiki article re Amazon',
          link: 'https://en.wikipedia.org/wiki/Amazon_(company)',
        },
        {
          name: 'Apple',
          hint: 'Wiki article re Apple',
          link: 'https://en.wikipedia.org/wiki/Apple_Inc.',
        },
        {
          name: 'Netflix',
          hint: 'Wiki article re Netflix',
          link: 'https://en.wikipedia.org/wiki/Netflix',
        },
        {
          name: 'Google',
          hint: 'Wiki article re Google',
          link: 'https://en.wikipedia.org/wiki/Google',
        },
      ],
      isVisible: true,
      task: 'Создайте в шаблоне массив объектов, содержащий название, подсказку и ссылку. Необходимо создать список ссылок, где вначале будет определяться номер ссылки, название. При нажатии – переходит по ссылке. При наведении – появляется всплывающая подсказка.',
    };
  },
  methods: {},
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

  &:hover {
    color: #2c3e50;
  }
}
ol {
  width: 100px;
  text-align: center;
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
