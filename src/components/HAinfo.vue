<template>
  <header class="jumbotron">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <div class="wrapper">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Home_Assistant_Logo.svg/768px-Home_Assistant_Logo.svg.png" />
      <span class="text">
        <h1> {{ content.location_name }} <br /> </h1>
        <span class="clearfix">
          <i v-if="running" class="material-icons">filter_drama</i>
          <i v-else class="material-icons">block</i>
          <small class="right"
            ><i>{{ content.state }}</i></small>
        </span>
      </span>
    </div>
  </header>
  <body></body>
</template>
<script>
import HomeAssistantService from "../services/home-assistant.service";
import { onMounted, ref, computed } from "vue";

export default {
  name: "HAinfo",
  setup() {
   const content = ref("");
   const running = computed(() => content.value.state === "RUNNING");

    onMounted(() => {
      HomeAssistantService.getInfo().then(
        (response) => {
          content.value = response.data;
        },
        (error) => {
          content.value =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    });

    return {
      content,
      running,
    };
  },
};
</script>
<style scoped>
img {
  width: 5em;
}

.container-box {
  display: relative;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.circle-green {
  width: 2em;
  height: 2em;
  background: rgb(32, 202, 16);
  border-radius: 50%;
}
.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  padding: 1em;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text {
  margin: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.right {
  float: right;
}
</style>