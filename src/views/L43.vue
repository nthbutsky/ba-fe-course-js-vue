<template>
  <div>
    <L43Task1 title="Task 1" />
    <L43Task2 title="Task 2" />
  </div>
</template>

<script>
import L43Task1 from '../components/L43Task1.vue';
import L43Task2 from '../components/L43Task2.vue';

export default {
  name: 'L43',
  components: {
    L43Task1,
    L43Task2,
  },
};
</script>
