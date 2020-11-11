<template>
  <div class="inputs">
    <div class="inputboxes">
      <input type="text" v-model="title" class="inout" />
      <input type="button" value="add" class="btn" v-on:click="add(title)" />
    </div>
  </div>
  <div
    v-for="todo in todos"
    :key="todo.id"
    class="item"
    v-bind:class="{ isdone: todo.isdone }"
  >
    {{ todo.title }}
    <input
      type="button"
      style="float:right"
      v-bind:class="{ btn: !todo.isdone, red: todo.isdone }"
      value="done"
      v-on:click="mark(todo)"
    />
    <input
      type="button"
      value="delete"
      style="float:right"
      v-on:click="remove(todo)"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      id: 0,
      todos:
        localStorage.getItem("todos") == null
          ? []
          : JSON.parse(localStorage.getItem("todos")),

      localid: Number(localStorage.getItem("id")),
    };
  },
  methods: {
    add(title) {
      if (!title) {
        alert("please enter a value");
        return 0;
      }
      this.title = "";
      this.id += 1;
      this.todos.push({
        id: this.id,
        title: title,
        isdone: false,
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    mark(todo) {
      todo.isdone = !todo.isdone;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    remove(todo) {
      this.newdata = this.todos.filter((element) => {
        return todo.id !== element.id;
      });
      this.todos = this.newdata;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>

<style>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0;
}
.dark {
  background-color: rgb(57, 21, 90);
  color: white;
}
.red {
  margin-left: 10px;
  background-color: red;
  border: 0;
  outline: 0;
  color: white;
  cursor: pointer;
}
.inputs {
  margin-top: 2em;
  display: flex;
}
.inputboxes {
  margin: 0 auto;
}
.item {
  padding: 18px;
  background-color: blueviolet;
  margin: 2em 2em;
}

.isdone {
  text-decoration: line-through;
}
.inout {
  border-radius: 0;
  border: 1px solid black;
  padding: 8px;
}

.btn {
  margin-left: 10px;
  background-color: black;
  border: 0;
  outline: 0;
  color: white;
  cursor: pointer;
}
</style>
