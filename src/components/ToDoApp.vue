<template>
  <div class="container">
    <h2 class="text-center mt-5">To-dooo List</h2>
    <div class="d-flex">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add task"
        class="form-control"
      />
      <button @click="addTask()" class="btn btn-info rounded-0">
        <span class="fa fa-check"></span>
      </button>
    </div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th
            scope="col"
            class="cursor-pointer"
            :class="sortedClass('name')"
            @click="sortBy('name')"
            title="Sort by alphabet"
          >
            Task
          </th>
          <th
            scope="col"
            class="col-width cursor-pointer"
            :class="sortedClass('status')"
            @click="sortBy('status')"
            title="Sort by Done status"
          >
            Status
          </th>
          <th scope="col" class="col-width">Edit</th>
          <th scope="col" class="col-width">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="text-start">
            <span
              :class="{
                'status-finished-strickthrough-text': task.status === 'done',
              }"
              >{{ firstCharToUpper(task.name) }}</span
            >
          </td>
          <td
            @click="changeStatus(index)"
            class="col-width text-light cursor-pointer"
            :class="{
              'bg-danger': task.status === 'to do',
              'bg-warning': task.status === 'in progress',
              'bg-success': task.status === 'done',
            }"
          >
            {{ firstCharToUpper(task.status) }}
          </td>
          <td
            class="col-width cursor-pointer"
            v-bind="task.editOption"
            @click="editTask(index)"
          >
            <span class="fa fa-pen"></span>
          </td>
          <td
            class="col-width cursor-pointer"
            v-bind="task.deleteOption"
            @click="deleteTask(index)"
          >
            <span class="fa fa-trash"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'todoapp',

  data() {
    return {
      newTask: '',
      editedTask: null,
      sort: {
        key: '',
        isAsc: false,
      },
    };
  },

  computed: {
    ...mapGetters(['statuses', 'tasks']),
  },

  methods: {
    ...mapActions(['insertTask', 'removeTask']),

    addTask() {
      if (this.newTask.length === 0) return;
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.newTask,
          status: 'to do',
          editOption: this.tasks.length,
          deleteOption: this.tasks.length,
        });
      } else {
        this.tasks[this.editedTask].name = this.newTask;
        this.editedTask = null;
      }
      this.newTask = '';
      this.insertTask();
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.removeTask();
    },

    editTask(index) {
      this.newTask = this.tasks[index].name;
      this.editedTask = index;
    },

    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    firstCharToUpper(input) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    },

    sortedClass(key) {
      return this.sort.key === key
        ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}`
        : '';
    },

    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;

      const list = this.tasks.slice();
      if (this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

      this.$store.state.tasks = list;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },

  mounted() {
    const savedTasks = localStorage.getItem('tasks');
    this.$store.state.tasks = JSON.parse(savedTasks) || [];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  transition: all 0.2s ease-in-out;
}
input {
  &:hover {
    filter: drop-shadow(0 0 3px hsl(190, 88%, 57%));
  }
}
.cursor-pointer {
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 6px #000000);
  }
}
.col-width {
  width: 120px;
}
.status-finished-strickthrough-text {
  text-decoration: line-through;
}

table {
  th.sorted {
    &.asc::after {
      display: inline-block;
      content: '▼';
    }
    &.desc::after {
      display: inline-block;
      content: '▲';
    }
  }
}
</style>
